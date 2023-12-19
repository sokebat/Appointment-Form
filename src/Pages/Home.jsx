import React, { useState } from "react";
import Form from "../Components/Form";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggled");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
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
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
