import styled from "styled-components";

const PollMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  font-size: 1.5rem;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
export default PollMeta;
