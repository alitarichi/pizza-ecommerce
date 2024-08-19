"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="pb-10">
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Register"} />
      </div>
      {userCreated && (
        <div className="text-center my-4">
          User Created. <br /> Please{" "}
          <Link className="underline underline-offset-4" href={"/login"}>
            Login &raquo;
          </Link>{" "}
        </div>
      )}
      {error && (
        <div className="text-center my-4">
          An error occurred while creating the user.
          <br /> Please try again later.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="w-full mt-16" disabled={creatingUser} type="submit">
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          <h1>or login with provider</h1>
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className=" w-full flex gap-4 justify-center"
        >
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with Google
        </button>
        <div className="text-center my-8 text-gray-500 border-t pt-4">
          Already have an account?{"  "}
          <Link href={"/login"} className="underline underline-offset-4">
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
