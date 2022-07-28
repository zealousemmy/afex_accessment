import styled from "styled-components";

interface LDMode {
  color: any;
}

export const DLDiv = styled.div`
  background-color: #f4f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3px;
  width: 4rem;
  /* margin: 10px; */
  cursor: pointer;
  border-radius: 20px;

  .light {
    display: flex;
    align-items: center;
    padding: 5px 3px;
    transition: all 1.5s linear;
    color: #000;

    .lightMode {
      background-color: #fff;
      border-radius: 50%;
      font-size: 20px;
      padding: 3px;
    }

    p {
      font-size: 12px;
      margin-right: 3px;
      font-weight: Bold;
    }
  }

  .dark {
    display: flex;
    align-items: center;
    padding: 5px 3px;
    transition: all 1.5s linear;
    color: #000;

    .darkMode {
      background-color: #fff;
      border-radius: 50%;
      font-size: 20px;
      padding: 3px;
    }

    p {
      font-size: 12px;
      margin-left: 3px;
      font-weight: Bold;
    }
  }
`;
