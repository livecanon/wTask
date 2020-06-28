import React from "react";
import styled from "styled-components";

const PriorityContainer = styled.div`
  border: 1px solid black;
  height: 3.9rem;
  padding: 0.3rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.28);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`;

const FormPriority = () => {
  return <PriorityContainer>Priority</PriorityContainer>;
};

export default FormPriority;
