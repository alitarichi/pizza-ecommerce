"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [username, setUsername] = useState("");
  const [saved, setSaved] = useState(false);
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUsername(session.data.user.name);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    setSaved(false);
    const response = await fetch("api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username }),
    });
    if (response.ok) {
      setSaved(true);
    }
  }

  if (status === "loading") {
    return "loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data.user.image;

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
        <div className="flex gap-2 items-center">
          <div>
            <div className=" p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-2"
                src={userImage}
                alt="avatar"
                width={250}
                height={250}
              />
              <button type="button">Edit Avatar</button>
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
