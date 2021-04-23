import { PlusIcon } from "@heroicons/react/outline";

export default function AddFriendIcon() {
  return (
    <div className="w-full flex items-center">
      <div className="relative cursor-pointer">
        <PlusIcon
          src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
          className="rounded-full h-12 w-12 border bg-gray-300 text-gray-500 p-2"
          alt="person"
        />
      </div>
      <div className="ml-2">
        <p className="hidden xl:flex font-medium text-gray-500">Add Friend</p>
      </div>
    </div>
  );
}
