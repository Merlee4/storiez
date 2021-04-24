import React from "react";
import AddFriendIcon from "./AddFriendIcon";

export default function Footer() {
  return (
    <div className=" p-10 pr-0 mr-0 w-full">
      {/* FRIENDS */}
      <div className="flex items-center justify-between pr-10">
        <p className="font-semibold text-xl">Your Friends</p>
        <p className="text-xs">10 friends</p>
      </div>
      {/* FRIENDS LIST */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-4 smooth-scroll">
        <div>
          <AddFriendIcon />
        </div>
      </div>
    </div>
  );
}
