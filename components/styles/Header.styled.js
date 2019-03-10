import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
  border-bottom: 1px solid #d2d2d2;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export default Header;
