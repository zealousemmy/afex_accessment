import React from "react";
import DashboardScreen from "../../components/Dashboard";

interface HomePageAtt {
  onclick: React.MouseEventHandler;
}

const Dashboard = ({ onclick }: HomePageAtt) => {
  return (
    <div>
      <DashboardScreen onclick={onclick} />
    </div>
  );
};

export default Dashboard;
