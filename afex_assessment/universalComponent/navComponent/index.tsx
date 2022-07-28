import Image, { StaticImageData } from "next/image";
import React from "react";
// import { IconType } from "react-icons";
import { withTheme } from "styled-components";
import { NavDiv } from "./nav.style";

interface NavArray {
  onclick?: React.MouseEventHandler;
  placeholder?: string;
  sidebar?: string;
  navArray?: {
    classMain?: string;
    section: {
      logo?: StaticImageData;
      component?: any;
      icon?: React.FC;
      textline?: string;
      text?: string;
      money?: string;
      buttontext?: string;
      buttonIcon?: any;
      classBody?: string;
      classname?: string;
      classitem?: string;
    }[];
  }[];
  theme?: any;
}

const Nav = ({ onclick, navArray, theme, sidebar, placeholder }: NavArray) => {
  return (
    <NavDiv color={theme} sidebar={sidebar}>
      {navArray?.map((item, key) => (
        <div key={key} className={`${item.classMain}`}>
          {item?.section?.map((item, key) => (
            <div key={key} className={`${item.classBody}`}>
              {item.logo ? (
                <div className={`${item.classname}`}>
                  <Image
                    src={item.logo}
                    alt={"logo"}
                    width={"100"}
                    height={"50"}
                  />
                </div>
              ) : item.component ? (
                <div onClick={onclick} className={`${item.classname}`}>
                  <item.component placeholder={placeholder && placeholder} />
                </div>
              ) : item.icon ? (
                <div className={`${item.classname}`}>
                  <item.icon />
                </div>
              ) : item.buttontext ? (
                <div className={`${item.classname}`}>
                  <button>{item.buttontext}</button>
                  <div>
                    <item.buttonIcon />
                  </div>
                </div>
              ) : (
                <div className={`${item.classname}`}>
                  <h4>{item.textline}</h4>
                  <p>{item.money}</p>
                </div>
              )}
              <div className={`${item.classitem}`}>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </NavDiv>
  );
};

export default withTheme(Nav);
