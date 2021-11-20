import React from "react";
import styled from "styled-components";

function StatusMessage({ children }) {
	return <StyledStatusMessage>{children}</StyledStatusMessage>;
}

const StyledStatusMessage = styled.p`
	text-align: center;
	font-size: 0.9rem;
	width: 100%;
	max-width: 350px;
	margin: 0 auto;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
`;

export default StatusMessage;
