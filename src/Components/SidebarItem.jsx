import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SidebarItem = ({ sideBarItem }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sideBarItem.id }); //need to pass the same id from object

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="group flex items-center border-2 border-slate-700 bg-slate-600 w-full">
        <p className="bg-gray-700 p-2">{sideBarItem.icon}</p>
        <p className="  text-xl p-1 text-white">{sideBarItem.text}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
