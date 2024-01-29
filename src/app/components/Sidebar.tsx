import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { IoBrowsers, IoCalculator } from "react-icons/io5";
import { SidebarMenuItem } from ".";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsers size={40}/>,
    title: "Dashboard",
    subTitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40}/>,
    title: "Counter",
    subTitle: "Counter Client Side",
  },
]

export  function Sidebar() {
  return (
    <div
      id="menu" 
      style={{ width: "20rem" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <FaReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">Board</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-14 h-14 "
              src="https://avatarfiles.alphacoders.com/968/96879.gif"
              alt="profileImage"
              width={60}
              height={60}
            />
          </span>
          <span className="text-sm md:text-base font-bold">David Vargas</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              path={item.path}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))
        }
      </div>
    </div>
  );
}
