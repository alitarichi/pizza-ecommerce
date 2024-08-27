"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUsername(session.data.user.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, image }),
      });
      if (response.ok) {
        resolve();
      } else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving ...",
      success: "profile Saved!",
      error: "Failed to save!",
    });
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      const uploadPromise = fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        if (response.ok) {
          return response.json().then((link) => {
            setImage(link);
          });
        }
        throw new Error("something went wrong");
      });

      await toast.promise(uploadPromise, {
        loading: "Uploading...",
        success: "Upload Completed!!",
        error: "Failed to upload!",
      });
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
        <div className="flex gap-2">
          <div className="px-10 ">
            <div className=" p-2 rounded-lg relative ">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-2 max-w-[240px] max-h-[240px]"
                  src={image}
                  alt="avatar"
                  width={240}
                  height={240}
                />
              )}
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
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
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Street Address" />
            <div className="flex gap-2">
              <input type="text" placeholder="Zip Code" />
              <input type="text" placeholder="City" />
            </div>
            <input type="text" placeholder="Country" />
            <button className="w-full" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
true;
