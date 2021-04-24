import { PlusIcon } from "@heroicons/react/outline";

export default function Card({ src }) {
  return (
    <div className="group py-2 ml-2 flex flex-col border shadow-sm cursor-pointer relative transition hover:border-gray-400 rounded duration-150">
      <div className="p-1 right-4 flex items-center gap-1">
        <PlusIcon className="h-10 bg-white rounded-full p-2 active:bg-gray-100 shadow" />
        <p className="text-gray-800">Add to Story</p>
      </div>
      <div className="cursor-pointer bg-white ">
        <img
          src={src}
          alt="profile"
          className="object-cover lg:w-full lg:h-72 md:w-full md:h-48 w-full h-64 object-top"
        />
      </div>
      <div className="bg-white p-2 flex justify-between w-full">
        <p className="text-sm truncate w-28">Mwelwa</p>
      </div>
    </div>
  );
}
