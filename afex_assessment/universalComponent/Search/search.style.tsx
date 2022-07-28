import styled from "styled-components";

interface ColorShow {
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const SearchDiv = styled.div`
  border: 1px solid ${({ color }: ColorShow) => color.SecondaryColor};
  display: flex;
  align-items: center;
  padding: 5px 12px;
  margin: 5px 0px 10px 0px;
  border-radius: 4px;
  outline: none;
  background-color: ${({ color }: ColorShow) =>
    color.PrimaryColor && color.PrimaryColor};

  input {
    outline: none;
    border: none;
    width: 96%;
    font-size: 16px;
    padding: 4px 10px;
    margin: 0px 5px;
    background-color: transparent;

    /* @media (max-width: 720px) {
      width: 96%;
    } */
  }

  /* @media (max-width: 920px) {
    width: 213px;
  } */
`;
