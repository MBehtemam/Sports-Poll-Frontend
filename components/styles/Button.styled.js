import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 15px;
  min-width: 300px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: ${props => {
    if (props.color === "red") {
      return "#fb3b49";
    } else if (props.color === "black") {
      return "black";
    } else {
      return "white";
    }
  }};
  color: ${props => {
    if (props.color === "red") {
      return "white";
    } else if (props.color === "black") {
      return "white";
    } else {
      return "black";
    }
  }};
  box-shadow: ${props =>
    props.color === "red" ? "8px 8px 0 rgba(251, 59, 73, 0.2);" : ""};
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
export default Button;
