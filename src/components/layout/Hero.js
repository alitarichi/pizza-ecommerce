import Image from "next/image";
import Right from "../icons/right";
import Information from "../icons/information";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the moissing piece that makes every day complete, a simple
          yet delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className=" bg-red-500 flex gap-2 text-white px-4 py-2 rounded-full">
            Order Now!
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Information />
          </button>
        </div>
      </div>
      <div className="w-16 h-16 relative">
        <Image
          src={"/pizza.png"}
          layout="fill"
          objectFit="contain"
          alt="pizza"
        />
      </div>
    </section>
  );
}
