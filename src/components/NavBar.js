import {
  HomeIcon,
  LogoutIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../images/IconNoBackground.png";

export default function NavBar() {
  const router = useHistory();
  const [menuVisible, setVisble] = useState(false);
  return (
    <div className="p-4 flex items-center justify-between sm:border">
      {/* LOGO */}
      <div className="flex items-center">
        <img src={Logo} alt="" className="h-8" />
        <p className="text-xl font-semibold text-gray-800">toriez</p>
      </div>
      {/* NAVBAR BUTTONS */}
      <div className="flex gap-4 items-center justify-end">
        {/* NEW STORY BUTTON */}
        <button className="outline-none flex gap-2  px-3 py-2 text-white rounded bg-indigo-900 hover:bg-blue-800 transition duration-200 ease-in-out items-center">
          <PlusIcon className="gap-5 h-5" />
          <p className="text-sm font-normal">NEW STORY</p>
        </button>

        <div
          className="h-12 p-1 cursor-pointer group"
          onClick={() => setVisble(!menuVisible)}
        >
          {/* USER ICON */}
          <div className="flex items-center ">
            <img
              src="https://m.media-amazon.com/images/I/81B5c6m0jaL._SS500_.jpg"
              className="rounded-full h-full w-12"
              alt="person"
            />
            <p className="hidden md:flex font-medium ml-2 text-lg">Mwelwa </p>
          </div>
        </div>

        {/* OPTIONS MENU */}
        <div
          className="absolute bg-white flex-col border shadow rounded  p-2 top-24 z-10  "
          style={{ display: menuVisible ? "flex" : "none" }}
        >
          <button
            onClick={() => {
              router.push("/");
              setVisble(false);
            }}
            className="flex items-center p-2 border-b gap-2"
          >
            <HomeIcon className="h-6" />
            <p>Home</p>
          </button>
          <button
            onClick={() => {
              router.push("/profile");
              setVisble(false);
            }}
            className="flex items-center p-2 border-b gap-2"
          >
            <UserIcon className="h-6" />
            <p>Your Profile</p>
          </button>
          <button
            onClick={() => alert("log out")}
            className="flex items-center p-2 gap-2"
          >
            <LogoutIcon className="h-6" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
