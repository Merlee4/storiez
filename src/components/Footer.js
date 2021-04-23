import Button from "./Button";

import React from "react";
import Person from "./Person";

export default function Footer() {
  return (
    <div className="mt-1 p-10 pr-0">
      {/* FRIENDS */}
      <div className="flex items-center justify-between pr-10">
        <p className="font-semibold text-xl">Your Friends</p>
        <div>
          <Button title="ADD FRIEND" />
          <p className="text-xs">10 friends</p>
        </div>
      </div>
      {/* FRIENDS LIST */}
      <div className="flex gap-4 overflow-x-scroll no-scrollbar py-4 smooth-scroll">
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
      </div>
    </div>
  );
}
