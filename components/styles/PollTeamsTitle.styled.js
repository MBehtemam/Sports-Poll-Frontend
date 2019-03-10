import styled from "styled-components";

const PollTeamsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 3.5rem;
  text-align: center;
  span {
    margin-right: 10px;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    font-size: 1.5rem;
  }
`;
export default PollTeamsTitle;
