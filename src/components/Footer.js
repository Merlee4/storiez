import React from "react";
import AddFriendIcon from "./AddFriendIcon";
import Person from "./Person";

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
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        {/* KEEPS THE LIST FROM THE GRADIDENT */}
        <div className="mr-4 p-2"></div>
        {/* GRaDIENT AT END OF LIST */}
        <div className="w-20 h-12 bg-gradient-to-l from-white absolute right-0"></div>
      </div>
    </div>
  );
}
