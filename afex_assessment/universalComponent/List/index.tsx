import React from "react";
import { withTheme } from "styled-components";
import { ListDiv } from "./list.style";

interface ListProps {
  theme?: any;
  listArr: {
    text: string;
  }[];
}

const List = ({ listArr, theme }: ListProps) => {
  return (
    <ListDiv color={theme}>
      {listArr?.map((item, key) => (
        <div
          key={key}
          className={`listBody ${key == 0 && "trans"} ${key == 1 && "red"}`}
        >
          <p>{item.text}</p>
        </div>
      ))}
    </ListDiv>
  );
};

export default withTheme(List);
