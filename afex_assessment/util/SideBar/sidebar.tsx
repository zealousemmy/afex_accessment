import { RiSmartphoneLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { BiTrendingUp, BiHistory } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Search from "../../universalComponent/Search";

export const sidebarsubSubArr = [
  {
    section: [
      {
        component: Search,
      },
    ],
  },
  {
    classMain: "sidebarsubFirstLayout",
    section: [
      {
        icon: BiTrendingUp,
        text: "Product View",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
      {
        icon: RiSmartphoneLine,
        text: "Order Book",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
      {
        icon: BiHistory,
        text: "Price History",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
      {
        icon: AiOutlineEye,
        text: "Open Orders",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
      {
        icon: FaCheck,
        text: "Closed Trades",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
      {
        icon: GiCancel,
        text: "Cancelled Trades",
        classBody: "sidebarsubBody",
        classname: "sidebarsubLayoutClass",
        classitem: "sidebarsubLayoutItem",
      },
    ],
  },
];
