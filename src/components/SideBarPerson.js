export default function SideBarPerson() {
  return (
    <div className="w-full flex cursor-pointer px-2 rounded hover:bg-gray-100 duration-200 ease-in-out transition">
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
          className="rounded-full h-12 w-12"
          alt="person"
        />
        <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
      </div>
      <div className="ml-2">
        <p className="">Tatiana</p>
        <p className="text-xs">Active</p>
      </div>
    </div>
  );
}
