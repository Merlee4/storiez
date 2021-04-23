import { LogoutIcon, PlusIcon } from "@heroicons/react/outline";
import Logo from "../images/IconNoBackground.png";

export default function NavBar() {
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
        <button className="outline-none flex gap-2  px-3 py-2 text-white rounded bg-indigo-900 items-center">
          <PlusIcon className="gap-5 h-5" />
          <p className="text-sm font-normal">NEW STORY</p>
        </button>
        {/* LOGOUT BUTTON */}
        <button className="flex gap-2 px-2 py-1 text-red-900 items-center">
          <LogoutIcon className="h-5" />
          <p className="text-sm hidden sm:flex">LOGOUT</p>
        </button>
      </div>
    </div>
  );
}
