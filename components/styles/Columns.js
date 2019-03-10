import styled from "styled-components";

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
  padding: 10px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
export default Columns;
