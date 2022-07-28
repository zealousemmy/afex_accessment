import styled from "styled-components";

interface ColorShow {
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const DashboardDiv = styled.div`
  background-color: ${({ color }: ColorShow) => color.body};
  z-index: 9;

  .dashboardGrid {
    display: flex;
  }

  .dashboardlastGridbody {
    width: 73%;
    .dashboardlastGridOne {
      margin: 10px;
      width: 100%;
      background-color: ${({ color }: ColorShow) => color.PrimaryColor};
    }

    .dashboardlastGridTwo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 10px;
    }
  }
`;
