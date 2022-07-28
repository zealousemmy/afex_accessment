import { FiBriefcase, FiUsers, FiSettings } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineLineChart, AiOutlineFile } from "react-icons/ai";

export const SideNavArr = [
  {
    classMain: "sidebarFirstLayout",
    section: [
      {
        icon: RiDashboardLine,
        text: "Overview",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
      {
        icon: AiOutlineLineChart,
        text: "Market",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
      {
        icon: FiBriefcase,
        text: "Portfolio",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
      {
        icon: FiUsers,
        text: "Community",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
      {
        icon: AiOutlineFile,
        text: "Reports",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
      {
        icon: FiSettings,
        text: "Settings",
        classBody: "sidebarBody",
        classname: "sidebarLayoutClass",
        classitem: "sidebarLayoutItem",
      },
    ],
  },
];
