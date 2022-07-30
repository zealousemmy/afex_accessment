import styled from "styled-components";
export const FormContainer = styled.div`
  background-color: #ffffff;
  width: 35%;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  .selectorDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: purple; */
    width: 100%;
    .selector {
      display: flex;
      width: 40%;
      align-items: center;
      input {
        margin-right: 0.5rem;
      }
      /* justify-content: space-between; */
    }
    .btnForgot {
      margin-top: 1rem;
      width: 60%;
      text-align: right;
    }
  }
  .nextPrevBtn {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    button {
      padding: 10px;
      margin: 0.5rem 0;
      border: none;
    }
    .signinBtn {
      background: #52965e;
      border-radius: 2px;
    }
    .backBtn {
      background: #f8fafb;
      border-radius: 2px;
      padding: 10px;
      margin: 0.5rem 0;
      border: none;
      text-align: center;
    }
  }
  .header {
    text-align: center;
    width: 100%;
  }
  .category {
    margin: 1rem 0;
    p {
      margin-bottom: 2rem;
    }
    .categorySelect {
      margin: 1rem 0;
      .active {
        background-color: black;
        color: white;
      }
      a {
        padding: 20px;
        border: 1px solid #e8ecef;
        background-color: transparent;
        margin-right: 1rem;
        border-radius: 2px;
        width: 40%;
      }
    }
  }
  .sideInput {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .inputLabel {
      /* background-color: gold; */
      width: 45%;
      input {
        width: 90%;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }
  .otp {
    color: #98a9bccc;
    border: none;
    width: 30%;
    margin: auto;
    background-color: transparent;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
  }
  .sidedButton {
    /* background-color: blue; */
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    margin-top: 8rem;

    .sideBtn {
      margin: 0;
      text-align: right;
      font-weight: 500;
      font-size: 14px;
      /* width: inherit; */
    }
  }
  .singleInput {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  input {
    border: 1px solid #e8ecef;
    padding: 10px;
    margin: 0.5rem 0;
    outline: none;
    border-radius: 2px;
  }
  label {
    text-transform: capitalize;
  }
  .btnRed {
    color: #d71e0e;
    border: none;
    background-color: transparent;
    /* background-color: pink; */
    margin: 1rem auto;
    margin-top: 3rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    width: 50%;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
