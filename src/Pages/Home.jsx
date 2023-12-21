import React, { useState } from "react";
import Form from "../Components/Form";
import Sidebar from "../Components/Sidebar";
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

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    // console.log("toggled");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [sidebarItems, setSidebarItems] = useState([
    { id: 1, icon: <FaHeading size={30} />, text: "Heading" },
    { id: 2, icon: <BsFilePersonFill size={30} />, text: "Full Name" },
    { id: 3, icon: <CgMail size={30} />, text: "E-mail" },
    { id: 4, icon: <IoLocationSharp size={30} />, text: "Address" },
    { id: 5, icon: <FaPhone size={30} />, text: "Phone" },
    { id: 6, icon: <BsCalendarDate size={30} />, text: "Date" },
    { id: 7, icon: <FaFileSignature size={30} />, text: "Signature" },
    { id: 8, icon: <MdAbc size={30} />, text: "Fill in the blanks" },
    { id: 9, icon: <BsCalendarDate size={30} />, text: "Appointment" },
    { id: 10, icon: <BsCart3 size={30} />, text: "Product List" },
    { id: 11, icon: <RiNumber2 size={30} />, text: "Number" },
    { id: 12, icon: <FaImages size={30} />, text: "Image" },
    { id: 13, icon: <IoTimeOutline size={30} />, text: "Time" },
    { id: 14, icon: <FaFileUpload size={30} />, text: "File Upload" },
  ]);

  const handleDragEnd = ({ active, over }) => {
    let oldIndex;
    let newIndex;
    if (active.id !== over.id) {
      setSidebarItems((prev) => {
        prev.forEach((data, index) => {
          if (data.id === active.id) {
            oldIndex = index;
          }

          if (data.id === over.id) {
            newIndex = index;
          }
        });

        return arrayMove(sidebarItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div>
        <Form />
      </div>

      <div className="relative">
        {!isSidebarOpen && (
          <button
            className="fixed top-10 left-10 text-white cursor-pointer text-2xl p-2 z-10"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        )}

        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5">
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5">
              <Sidebar
                closeSidebar={closeSidebar}
                sideBarItems={sidebarItems}
              />
            </div>
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default Home;
