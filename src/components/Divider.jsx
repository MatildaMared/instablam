import React from "react";
import styled from "styled-components";

function Divider() {
	return <StyledDivider />;
}

const StyledDivider = styled.div`
	width: 80px;
	height: 2px;
	background: var(--gradient);
	margin: 0 auto;
	margin: 1rem 0;
	opacity: 0.75;
`;

export default Divider;
