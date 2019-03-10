import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100%;
  overflow-y: scroll;
  flex-direction: ${prop => (prop.direction === "row" ? "row" : "column")};
`;
export default Container;
