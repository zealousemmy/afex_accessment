import React from "react";
import Nav from "../navComponent";

interface SideBarProps {
  sidebar: string;
  placeholder?: string;
  SideNavArr: {
    section: {
      component?: any;
      icon?: React.FC;
      classBody?: string;
      classname?: string;
      classitem?: string;
    }[];
  }[];
}

const SideBar = ({ SideNavArr, sidebar, placeholder }: SideBarProps) => {
  return (
    <div>
      <Nav navArray={SideNavArr} sidebar={sidebar} placeholder={placeholder} />
    </div>
  );
};

export default SideBar;
