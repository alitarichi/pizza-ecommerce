import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
  return (
    <section className="relative overflow-hidden">
      <div className="left-0 right-0 w-full relative z-0">
        <div className="h-48 w-48 absolute -left-12 z-0">
          <Image
            src={"/sallad1.png"}
            layout="fill"
            objectFit="contain"
            alt="salad"
          />
        </div>
        <div className="h-48 w-48 absolute -right-12 z-0">
          <Image
            src={"/sallad2.png"}
            layout="fill"
            objectFit="contain"
            alt="salad"
          />
        </div>
      </div>
      <div className="text-center mb-4 z-10 relative">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-red-500 font-bold text-4xl italic">Menu</h2>
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
