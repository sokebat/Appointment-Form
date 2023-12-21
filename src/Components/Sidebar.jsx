import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SidebarItem from "./SidebarItem";
import "../App.css";

const Sidebar = ({ closeSidebar, sideBarItems }) => {
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

        <div className="">
          <SortableContext
            items={sideBarItems.map((data) => {
              return data.id;
            })} //need to send pritimive value not refrential value
            strategy={verticalListSortingStrategy}
          >
            {sideBarItems.map((sideBarItem, index) => (
              <SidebarItem key={index} sideBarItem={sideBarItem} />
            ))}
          </SortableContext>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
