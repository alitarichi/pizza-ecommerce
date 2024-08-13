import SectionHeaders from "@/components/layout/SectionHeaders";

export default function RegisterPage() {
  return (
    <section>
      <div className="text-center py-8">
        <SectionHeaders MainHeader={"Register"} />
      </div>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <button className="mt-16" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
