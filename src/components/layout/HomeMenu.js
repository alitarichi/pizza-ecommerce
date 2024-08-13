import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className="">
      <div className=" left-0 right-0 w-full">
        <div className="h-48 w-48 absolute -left-12 ">
          <Image
            src={"/sallad1.png"}
            layout="fill"
            objectFit="contain"
            alt="salad"
          />
        </div>
        <div className="h-48 w-48 absolute -right-12">
          <Image
            src={"/sallad2.png"}
            layout="fill"
            objectFit="contain"
            alt="salad"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-red-500 font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <img src="/pizza.png" alt="pizza" />
          <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <button className="bg-red-500 text-white mt-4 rounded-full px-8 py-2">
            Add to Cart $12
          </button>
        </div>
      </div>
    </section>
  );
}
