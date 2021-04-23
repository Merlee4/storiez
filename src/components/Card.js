import { ReplyIcon } from "@heroicons/react/outline";

export default function EmpryCard({ src }) {
  const Owner = () => {
    return (
      <div className="flex">
        <div className="h-12 w-12 flex items-ceneter p-1">
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
              className="rounded-full h-full w-full"
              alt="person"
            />
            <div className="rounded-full w-2/6 h-2/6 absolute bg-green-400 bottom-0 border border-green-900 "></div>
          </div>
        </div>
        <div>
          <p className=" text-black">Riley VKACJ</p>
          <p className="text-sm">Active Now</p>
        </div>
      </div>
    );
  };
  return (
    <div className="group py-2 ml-2 flex flex-col border shadow-sm cursor-pointer transition hover:border-gray-400 rounded duration-150">
      <div className="cursor-pointer bg-white ">
        <Owner />
        <img
          src={src}
          alt="profile"
          className="object-cover lg:w-full lg:h-96 md:w-full md:h-48 w-full h-96 object-top"
        />
      </div>
      <div className="bg-white p-2 flex justify-between w-full">
        <p className="text-sm truncate w-28">Add your text</p>
      </div>
    </div>
  );
}
