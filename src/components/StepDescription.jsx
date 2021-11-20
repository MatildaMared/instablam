import React from "react";
import styled from "styled-components";

function StepDescription({ currentStep }) {
	return (
		<Step>
			{currentStep === 1 && "Step 1. Take photo"}
			{currentStep === 2 && "Step 2. Add location"}
			{currentStep === 3 && "Step 3. Add filter"}
			{currentStep === 4 && "Step 4. Add caption"}
		</Step>
	);
}

const Step = styled.p`
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 0.5rem;
`;

export default StepDescription;
