import SectionHeaders from "@/components/layout/SectionHeaders";

export default function RegisterPage() {
  return (
    <section>
      <div className="text-center">
        <SectionHeaders MainHeader={"Register"} />
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
