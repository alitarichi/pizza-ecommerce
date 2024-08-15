import Image from "next/image";
import Right from "../icons/right";
import Information from "../icons/information";

export default function Hero() {
  return (
    <section className="hero mt-8 gap-24">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better <br />
          with a <span className="text-red-500"> Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the moissing piece that makes <br />
          every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" bg-red-500 uppercase flex gap-2 text-white px-4 py-2 rounded-full items-center ">
            Order Now!
            <Right />
          </button>
          <button className=" flex gap-2 py-2 text-gray-600 font-semibold border rounded-full px-4 items-center">
            Learn more
            <Information />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image src={"/pizza.png"} width={320} height={320} alt="pizza" />
      </div>
    </section>
  );
}
