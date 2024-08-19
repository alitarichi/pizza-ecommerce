"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userData?.name) {
    userName = userData.name.split(" ")[0];
  }

  return (
    <header className="flex items-center justify-between">
      <Link href="" className=" text-red-500 font-semibold text-2xl ">
        ST PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-red-500 rounded-full text-white px-8 py-2"
            >
              Logout
            </button>
          </>
        )}
        {status !== "authenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"register"}
              className="bg-red-500 rounded-full text-white px-8 py-2"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
