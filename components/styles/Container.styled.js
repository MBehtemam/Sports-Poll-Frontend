import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${prop => (prop.direction === "row" ? "row" : "column")};
`;
export default Container;
