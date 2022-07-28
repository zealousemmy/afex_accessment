import axios from "axios";
import React, { FunctionComponent } from "react";
import { withTheme } from "styled-components";
import List from "../../universalComponent/List";
import Nav from "../../universalComponent/navComponent";
import SideBar from "../../universalComponent/SideBar";
import SubTable from "../../universalComponent/SubTable";
import { NavArray } from "../../util/dashboardUtil/navArray";
import { SideNavArr } from "../../util/SideBar";
import { sidebarsubSubArr } from "../../util/SideBar/sidebar";
import { DashboardDiv } from "./dashboard.style";

interface HomePageAtt {
  onclick: React.MouseEventHandler;
  theme: any;
}

const DashboardScreen = ({ onclick, theme }: HomePageAtt) => {
  const ListOne = [
    { text: "Board" },
    { text: "x-Trades" },
    { text: "OTC" },
    { text: "FI" },
    { text: "Derivatives" },
  ];

  const ListTwo = [
    { text: "Product" },
    { text: "All" },
    { text: "SMAZ" },
    { text: "SBBS" },
    { text: "SPRL" },
    { text: "SGNG" },
    { text: "SSGM" },
    { text: "FETC" },
    { text: "SCOD" },
  ];

  const subtableOne = [
    {
      product: "Product",
      Quantity: "Quantity",
      Bid_Price: "Bid Price",
    },
    { product: "Soybeans (SSBS)", Quantity: "2003", Bid_Price: "1736.92" },
    { product: "Paddy Rice (SPRL)", Quantity: "11293", Bid_Price: "3627.00" },
    { product: "Maize (SMAZ)", Quantity: "1832", Bid_Price: "8294.01" },
    { product: "Sorghum (SSGM)", Quantity: "3212", Bid_Price: "1736.92" },
    {
      product: "Fair Trade ETC (FETC)",
      Quantity: "29102",
      Bid_Price: "8192.00",
    },
  ];

  const subtableTwo = [
    {
      product: "Product",
      Quantity: "Quantity",
      Bid_Price: "Bid Price",
    },
    { product: "Soybeans (SSBS)", Quantity: "2003", Bid_Price: "1736.92" },
    { product: "Paddy Rice (SPRL)", Quantity: "11293", Bid_Price: "3627.00" },
    { product: "Maize (SMAZ)", Quantity: "1832", Bid_Price: "8294.01" },
    { product: "Sorghum (SSGM)", Quantity: "3212", Bid_Price: "1736.92" },
    {
      product: "Fair Trade ETC (FETC)",
      Quantity: "29102",
      Bid_Price: "8192.00",
    },
  ];

  axios
    .get(`https://comx-sand-api.afexnigeria.com/api/security-price/live`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err.message));

  return (
    <DashboardDiv color={theme}>
      <Nav navArray={NavArray} onclick={onclick} />
      <div className={"dashboardGrid"}>
        <SideBar SideNavArr={SideNavArr} sidebar={"sidebar"} />
        <SideBar
          SideNavArr={sidebarsubSubArr}
          sidebar={"sidebarsub"}
          placeholder={"Search"}
        />
        <div className={"dashboardlastGridbody"}>
          <div className={"dashboardlastGridOne"}>
            <div>
              <List listArr={ListOne} />
            </div>
            <div>
              <List listArr={ListTwo} />
            </div>
          </div>

          <div className={"dashboardlastGridTwo"}>
            <div className={"dashboardlastGridTwoDiv"}>
              <SubTable
                subTableArr={subtableOne}
                subTableButtonDetails={"Buy"}
              />
            </div>
            <div className={"dashboardlastGridTwoDiv"}>
              <SubTable
                subTableArr={subtableTwo}
                subTableButtonDetails={"Sell"}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardDiv>
  );
};

export default withTheme(DashboardScreen);
