import styled from "styled-components";

const ButtonRow = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  button {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 128px;
    height: 64px;
    background-color: #ffe484;
    border-color: #ffe484;
    font-size: 1rem;
    font-weight: 500;
  }
`;
export default ButtonRow;
