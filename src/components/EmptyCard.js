import { PlusIcon } from "@heroicons/react/outline";

export default function Card({ src }) {
  const Owner = () => {
    return (
      <div
        className="flex items-center relative"
        onClick={() => alert("Add a story")}
      >
        <div className="h-12 w-12 flex items-ceneter p-1 relative">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFAKUjQ8zIsFA/profile-displayphoto-shrink_200_200/0/1611671601557?e=1622073600&v=beta&t=XZWn5RALkSWOjbCVROOa7OobGY4ouLjPnYs1gy5NTZ4"
            className="rounded-full h-full w-full"
            alt="person"
          />
        </div>
        <div>
          <p className=" text-black">Mwelwa NKuta</p>
        </div>
        <div className="absolute  top-20 right-4">
          <PlusIcon className="h-10 bg-white rounded-full p-2 active:bg-gray-100" />
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
