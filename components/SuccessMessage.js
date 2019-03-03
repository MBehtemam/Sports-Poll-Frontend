import styled from "styled-components";
import React from "react";

import PropTypes from "prop-types";

const SuccessStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplaySuccess = ({ success, message }) => {
  if (!success) return null;

  return (
    <SuccessStyles>
      <p>
        <strong>Success</strong>
        <p>{message}</p>
      </p>
    </SuccessStyles>
  );
};

export default DisplaySuccess;
