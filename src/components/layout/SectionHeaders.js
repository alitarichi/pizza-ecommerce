export default function SectionHeaders({ subHeader, MainHeader }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-red-500 font-bold text-4xl italic">{MainHeader}</h2>
    </>
  );
}
