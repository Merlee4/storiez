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
              src="data:image/jpeg;base64,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"
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
