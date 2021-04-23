export default function SideBarPerson() {
  return (
    <div className="w-full flex">
      <div className="relative">
        <img
          src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
          className="rounded-full h-12 w-12"
          alt="person"
        />
        <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
      </div>
      <div className="ml-2">
        <p className="hidden xlg:flex">Riley</p>
        <p className="text-xs">Active now</p>
      </div>
    </div>
  );
}
