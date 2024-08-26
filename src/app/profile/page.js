"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUsername(session.data.user.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    setSaved(false);
    setIsSaving(true);
    const response = await fetch("api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, image }),
    });
    setIsSaving(false);
    if (response.ok) {
      setSaved(true);
    }
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const link = await response.json();
      setImage(link);
    }
  }

  if (status === "loading") {
    return "loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section>
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Profile"} />
      </div>
      <div className="max-w-md mx-auto">
        {saved && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
            Profile Saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-300">
            Saving ...
          </h2>
        )}
        <div className="flex gap-2 items-center">
          <div className="px-10 ">
            <div className=" p-2 rounded-lg relative ">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-2 max-w-[120px] max-h-[120px]"
                  src={image}
                  alt="avatar"
                  width={250}
                  height={250}
                />
              )}
              <label>
                <input
                  type="file"
                  className="hidden"
                  onClick={handleFileChange}
                />
                <span className=" block bg-red-500 font-semibold text-center text-white border-gray-500 border rounded-xl cursor-pointer px-4 py-2">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="First and last name"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <button className="w-full" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
