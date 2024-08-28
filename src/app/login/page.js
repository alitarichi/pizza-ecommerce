"use client";

import { signIn } from "next-auth/react";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInProgress, setLogInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLogInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLogInProgress(false);
  }

  return (
    <section className="pb-10 ">
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Login"} />
      </div>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          disabled={logInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          className="mt-4"
          type="password"
          placeholder="Your Password"
          value={password}
          disabled={logInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="w-full mt-16" disabled={logInProgress} type="submit">
          login
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
          Don't have an account?{"  "}
          <Link href={"/register"} className="underline underline-offset-4">
            Register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
