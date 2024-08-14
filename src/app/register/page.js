"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Register"} />
      </div>
      <form className="block max-w-xs mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="mt-16" type="submit">
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          <h1>or login with provider</h1>
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="google" width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
