import {
  FaFileSignature,
  FaHeading,
  BsFilePersonFill,
  BsCart3,
  BsCalendarDate,
  CgMail,
  IoLocationSharp,
  FaPhone,
  MdAbc,
  RiNumber2,
  FaImages,
  IoTimeOutline,
  FaFileUpload,
} from "@/Components/index";

import "../App.css";

const Sidebar = ({ closeSidebar }) => {
  const sideBarItems = [
    { icon: <FaHeading size={30} />, text: "Heading" },
    { icon: <BsFilePersonFill size={30} />, text: "Full Name" },
    { icon: <CgMail size={30} />, text: "E-mail" },
    { icon: <IoLocationSharp size={30} />, text: "Address" },
    { icon: <FaPhone size={30} />, text: "Phone" },
    { icon: <BsCalendarDate size={30} />, text: "Date" },
    { icon: <FaFileSignature size={30} />, text: "Signature" },
    { icon: <MdAbc size={30} />, text: "Fill in the blanks" },
    { icon: <BsCalendarDate size={30} />, text: "Appointment" },
    { icon: <BsCart3 size={30} />, text: "Product List" },
    { icon: <RiNumber2 size={30} />, text: "Number" },
    { icon: <FaImages size={30} />, text: "Image" },
    { icon: <IoTimeOutline size={30} />, text: "Time" },
    { icon: <FaFileUpload size={30} />, text: "File Upload" },
  ];

  return (
    <div className="max-w-sm overflow-y-auto sidebar">
      <div className="bg-slate-700 text-white h-screen">
        <div className="bg-slate-600 flex items-center p-2">
          <p className="text-2xl">Form Element</p>
          <button
            className="text-white cursor-pointer text-2xl ml-auto"
            onClick={closeSidebar}
          >
            ❌
          </button>
        </div>

        <div className="flex items-center justify-evenly text-xl p-2">
          <p className="hover:border-b-4 border-b-4 border-transparent hover:border-yellow-500">
            BASIC
          </p>
          <p className="hover:border-b-4 border-b-4 border-transparent hover:border-yellow-500">
            PAYMENTS
          </p>
          <p className="hover:border-b-4 border-b-4 border-transparent hover:border-yellow-500">
            WIDGETS
          </p>
        </div>

        {sideBarItems.map((entry, index) => (
          <div
            key={index}
            className="group flex items-center border-2 border-slate-700 bg-slate-600 w-full   "
          >
            <p className="bg-gray-700 p-2">{entry.icon}</p>
            <p className="bg-gray-600 text-xl p-1 text-white">{entry.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
