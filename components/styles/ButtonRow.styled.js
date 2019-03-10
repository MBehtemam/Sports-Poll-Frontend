import styled from "styled-components";

const ButtonRow = styled.section`
  display: flex;
  /* justify-content: space-around; */
  margin-top: 10px;
  margin-bottom: 10px;
  button {
    border: 0;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 32px;
    background-color: #ffe484;
    border-color: #ffe484;
    font-size: 1rem;
    font-weight: 500;
  }
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    button {
      width: 50%;
    }
  }
`;
export default ButtonRow;
