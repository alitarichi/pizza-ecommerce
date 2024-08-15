"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <section>
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Register"} />
      </div>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
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
        <button className="w-full mt-16" type="submit">
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          <h1>or login with provider</h1>
        </div>
        <button className=" w-full flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
