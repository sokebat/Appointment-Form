import React from "react";
import { FaHeading } from "react-icons/fa";
import { BsFilePersonFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="  max-w-sm">
      <div className="fixed bg-slate-700 text-white h-screen flex flex-col items-center py-4">
        <button
          className="flex text-white cursor-pointer text-2xl ml-auto mb-2"
          onClick={closeSidebar}
        >
          ❌
        </button>

        <div className="flex items-center border-2 border-slate-700 bg-slate-600 w-full ">
          <p className="bg-gray-700 p-3">
            <FaHeading size={20} className="" />
          </p>
          <p className="bg-gray-600 text-xl p-2 text-white">Heading</p>
        </div>
        <div className="flex items-center border-2 border-slate-700 bg-slate-600 w-full ">
          <p className="bg-gray-700 p-3">
            <BsFilePersonFill size={20} className="" />
          </p>
          <p className="bg-gray-600 text-xl p-2 text-white">Full Name</p>
        </div>
        <div className="flex items-center border-2 border-slate-700 bg-slate-600 w-full">
          <p className="bg-gray-700 p-3">
            <CgMail size={20} className="" />
          </p>
          <p className="bg-gray-600 text-xl p-2 text-white">E-mail</p>
        </div>
        <div className="flex items-center border-2 border-slate-700 bg-slate-600 w-full">
          <p className="bg-gray-700 p-3">
            <IoLocationSharp size={20} className="" />
          </p>
          <p className="bg-gray-600 text-xl p-2 text-white">Address</p>
        </div>
        <div className="flex items-center border-2 border-slate-700 bg-slate-600 w-full">
          <p className="bg-gray-700 p-3">
            <FaPhone size={20} className="" />
          </p>
          <p className="bg-gray-600 text-xl p-2 text-white">Phone</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
