import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-0">
        <div className="absolute z-0">
          <Image src={"/sallad1.png"} width={100} height={100} alt="salad" />
        </div>
        <div className="absolute right-0 z-0">
          <Image src={"/sallad2.png"} width={100} height={100} alt="salad" />
        </div>
      </div>
      <div className="text-center mb-4 z-10 relative">
        <SectionHeaders subHeader={"Check Out"} MainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4 z-10 relative px-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
