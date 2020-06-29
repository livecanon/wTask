import React from "react";
import styled from "styled-components";

const Separator = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin: 3rem 0rem 1.5rem 0;
  width: 100%;
`;

const SectionSeparator = () => {
  return <Separator />;
};

export default SectionSeparator;