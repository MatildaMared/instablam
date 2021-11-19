import React from "react";
import styled from "styled-components";

function Heading({ text }) {
	return <StyledHeading>{text}</StyledHeading>;
}

const StyledHeading = styled.h1`
	font-family: var(--font-secondary);
	margin-top: 0.5rem;
  text-align: center;
`;

export default Heading;
