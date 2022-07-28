import React from "react";
import { withTheme } from "styled-components";
import { SubTableDiv } from "./subtable.style";

interface SubTableProps {
  theme?: any;
  subTableButtonDetails: string;
  subTableArr: {
    product: string;
    Quantity: string;
    Bid_Price: string;
  }[];
}

const SubTable = ({
  subTableArr,
  subTableButtonDetails,
  theme,
}: SubTableProps) => {
  return (
    <SubTableDiv color={theme} setColor={subTableButtonDetails}>
      {subTableArr?.map((item, key) => (
        <div key={key} className={"subTablebody"}>
          <p>{item.product}</p>
          <p className={"center"}>{item.Quantity}</p>
          <p className={"center cols"}>{item.Bid_Price}</p>
          {key !== 0 && <button>{subTableButtonDetails}</button>}
        </div>
      ))}
    </SubTableDiv>
  );
};

export default withTheme(SubTable);
