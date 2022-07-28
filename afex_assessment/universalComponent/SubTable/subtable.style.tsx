import styled from "styled-components";

interface ColorShow {
  setColor?: string;
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const SubTableDiv = styled.div`
  background-color: ${({ color }: ColorShow) => color.PrimaryColor};

  .subTablebody {
    display: flex;
    align-items: center;
    border: 1px solid ${({ color }: ColorShow) => color.body};
    padding: 10px 15px;

    p {
      width: 140px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: ${({ color }: ColorShow) => color.SecondaryColor};
    }

    .center {
      text-align: center;
    }

    .cols {
      color: ${({ setColor }: ColorShow) =>
        setColor === "Buy" ? "#bad5c0" : setColor === "Sell" && "red"};
    }

    button {
      background-color: transparent;
      outline: none;
      border: 1px solid
        ${({ setColor }: ColorShow) =>
          setColor === "Buy" ? "#bad5c0" : setColor === "Sell" && "red"};
      color: ${({ setColor }: ColorShow) =>
        setColor === "Buy" ? "#bad5c0" : setColor === "Sell" && "red"};
      padding: 8px 10px;
    }
  }
`;
