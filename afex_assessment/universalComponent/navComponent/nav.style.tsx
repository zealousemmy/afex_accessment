import styled from "styled-components";

interface ColorShow {
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const NavDiv = styled.div`
z-index: 20;
  background-color: ${({ color }: ColorShow) => color.PrimaryColor};
  color: ${({ color }: ColorShow) => color.SecondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ sidebar }: ColorShow) => sidebar && "column"};
  padding: 0px 20px;
  margin: ${({ sidebar }: ColorShow) => sidebar == "sidebarsub" && "10px"};
  width: ${({ sidebar }: ColorShow) =>
    sidebar == "sidebar" ? "120px" : sidebar == "sidebarsub" && "200px"};
  height: ${({ sidebar }: ColorShow) => sidebar == "sidebar" && "90vh"};
  border-bottom: 1px solid ${({ color }: ColorShow) => color.body};

  .secondLayout {
    display: flex;
    align-items: center;

    .secondBodyOne {
      margin: 0px 20px;
    }

    .secondBodyTwo {
      border-left: 1px solid ${({ color }: ColorShow) => color.body};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .secondBody {
      margin: 0px 20px;

      h4 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
      }

      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
      }
    }

    .secondBodySix {
      border-left: 1px solid ${({ color }: ColorShow) => color.body};
      padding: 20px;
      padding-left: 100px;

      .secondLayoutClassSix {
        display: flex;
        align-items: center;

        button {
          background-color: ${({ color }: ColorShow) => color.SecondaryColor};
          color: ${({ color }: ColorShow) => color.PrimaryColor};
          border: none;
          outline: none;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          font-size: 10px;
          line-height: 12px;
          padding: 5px 10px;
          margin-right: 5px;
        }
      }
    }
  }

  .sidebarFirstLayout {
    .sidebarBody {
      text-align: center;
      margin: 10px 0px;
      padding: 10px 2px;

      .sidebarLayoutClass {
        font-size: 30px;
      }

      .sidebarLayoutItem {
        p {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }

  .sidebarsubFirstLayout {
    width: 100%;

    .sidebarsubBody {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0px;
      padding: 10px 2px;
      width: 100%;

      .sidebarsubLayoutClass {
        /* font-size: 30px; */
      }

      .sidebarsubLayoutItem {
        p {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
`;
