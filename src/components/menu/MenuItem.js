export default function MenuItem() {
  return (
    <div
      className=" bg-gray-200 p-4 rounded-lg text-center hover:bg-white border
    shadow-xl transition-all flex flex-col"
    >
      <img src="/pizza.png" alt="pizza" className="max-h-24 mx-auto" />
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <button className=" bg-red-500 text-white mt-4 rounded-full px-8 py-2">
        Add to Cart $12
      </button>
    </div>
  );
}
