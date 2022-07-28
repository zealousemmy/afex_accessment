import styled from "styled-components";

interface ColorShow {
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const ListDiv = styled.div`
  display: flex;
  padding: 8px 20px;
  color: ${({ color }: ColorShow) => color.SecondaryColor};

  .listBody {
    background-color: ${({ color }: ColorShow) => color.body};
    margin: 1px 10px;
    padding: 8px 10px;
    border-radius: 20px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
    }
  }

  .red {
    background-color: red;
  }

  .trans {
    background-color: transparent;
  }
`;
