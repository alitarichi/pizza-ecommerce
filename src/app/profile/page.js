"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession;
  const { status } = session;
  console.log(session);

  if (status === "loading") {
    return "loading...";
  }

  if (!status) {
    return redirect("/login");
  }

  return (
    <section>
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Profile"} />
      </div>
    </section>
  );
}
