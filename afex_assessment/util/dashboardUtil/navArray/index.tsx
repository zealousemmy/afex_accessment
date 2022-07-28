import afexLogo from "../../../assets/comX.png";
import LightDarkMode from "../../../components/Dark&LightMode";
import { BsCaretRight, BsCaretDown } from "react-icons/bs";

export const NavArray = [
  {
    classMain: "firstLayout",
    section: [
      {
        logo: afexLogo,
        classBody: "firstLayoutBodyOne",
        classname: "firstLayoutClassOne",
      },
    ],
  },
  {
    classMain: "secondLayout",
    section: [
      {
        component: LightDarkMode,
        classBody: "secondBodyOne",
        classname: "secondLayoutClassOne",
        classitem: "secondLayoutItemThree",
      },
      {
        icon: BsCaretRight,
        classBody: "secondBodyTwo",
        classname: "secondLayoutClassTwo",
        classitem: "secondLayoutItemTwo",
      },
      {
        textline: "CASH BALANCE",
        money: "₦8,374,763",
        classBody: "secondBody",
        classname: "secondLayoutClass",
        classitem: "secondLayoutItem",
      },
      {
        textline: "SECURITIES VALUE",
        money: "₦8,374,763",
        classBody: "secondBody",
        classname: "secondLayoutClass",
        classitem: "secondLayoutItem",
      },
      {
        textline: "LOAN BALANCE",
        money: "₦7,542,246",
        classBody: "secondBody",
        classname: "secondLayoutClass",
        classitem: "secondLayoutItem",
      },
      {
        buttontext: "Demo",
        buttonIcon: BsCaretDown,
        classBody: "secondBodySix",
        classname: "secondLayoutClassSix",
        classitem: "secondLayoutItemSix",
      },
    ],
  },
];
