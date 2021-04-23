import Button from "./Button";
import React from "react";
import SideBarPerson from "./SideBarPerson";

export default function SideBar() {
  return (
    <div className="mt-1 p-10 pr-0 w-64">
      {/* FRIENDS */}
      <div className="flex flex-col  justify-between pr-10">
        <div className="py-2">
          <Button title="ADD FRIEND" />
          <p className="text-xs">10 friends</p>
        </div>
      </div>

      {/* FRIENDS LIST */}
      <p className="font-semibold text-xl">Your Friends</p>
      <div className="flex flex-col gap-4 overflow-y-auto py-4 smooth-scroll no-scrollbar">
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
        <SideBarPerson />
      </div>
    </div>
  );
}
