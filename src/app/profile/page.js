"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession;
  const { status } = session;
  console.log(session);

  if (status === "loading") {
    return "loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.user?.Image;

  return (
    <section>
      <div className="text-center py-8 mb-4">
        <SectionHeaders MainHeader={"Profile"} />
      </div>
      <form className="max-w-xs mx-auto border">
        <div>
          <Image src={userImage} alt="avatar" width={64} height={64} />
        </div>
      </form>
    </section>
  );
}
