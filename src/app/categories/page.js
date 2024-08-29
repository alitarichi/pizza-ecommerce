import SectionHeaders from "@/components/layout/SectionHeaders";
import UserTabs from "@/components/layout/UserTabs";

export default function CategoriesPage() {
  return (
    <section className="pt-4">
      <UserTabs isAdmin={true} />
      <div className="text-center py-8 mb-2">
        <SectionHeaders MainHeader={"Categories"} />
      </div>
    </section>
  );
}
