import Link from "next/link";

export default function Header() {
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
        <Link
          href={""}
          className="bg-red-500 rounded-full text-white px-8 py-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
