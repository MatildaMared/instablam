import React, { useState } from "react";
import Camera from "../components/Camera";
import Steps from "../components/Steps";
import Divider from "../components/Divider";
import styled from "styled-components";
import AddLocationData from "../components/AddLocationData";

function NewPhotoPage() {
	const totalSteps = 4;
	const [currentStep, setCurrentStep] = useState(1);
	const [photo, setPhoto] = useState(null);

	return (
		<Wrapper>
			<Heading>Add new photo</Heading>
			<Step>
				{currentStep === 1 && "Step 1. Take photo"}
				{currentStep === 2 && "Step 2. Add location"}
				{currentStep === 3 && "Step 3. Add filters"}
				{currentStep === 4 && "Step 4. Add caption"}
			</Step>
			<Divider />
			{currentStep === 1 && (
				<Camera
					setPhoto={setPhoto}
					photo={photo}
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
				/>
			)}
			{currentStep === 2 && <AddLocationData photo={photo} />}
			<Steps totalSteps={totalSteps} currentStep={currentStep} />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
`;

const Heading = styled.h1`
	font-family: var(--font-secondary);
	margin-top: 0.5rem;
`;

const Step = styled.p`
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 0.5rem;
`;

export default NewPhotoPage;
