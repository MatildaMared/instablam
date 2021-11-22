import React, { useState, useEffect, useContext } from "react";
import Camera from "../components/Camera";
import Steps from "../components/Steps";
import Divider from "../components/Divider";
import styled from "styled-components";
import AddLocationData from "../components/AddLocationData";
import StepDescription from "../components/StepDescription";
import Heading from "../components/Heading";
import { Context } from "../context/Context";
import AddFilter from "../components/AddFilter";
import AddDescription from "../components/AddDescription";

function NewPhotoPage() {
	const [, updateContext] = useContext(Context);
	const totalSteps = 4;
	const [currentStep, setCurrentStep] = useState(1);

	useEffect(() => {
		updateContext({
			photo: null,
			location: null,
			stream: null,
			filter: null,
		});
	}, [updateContext]);

	return (
		<Wrapper>
			<Heading text="Add new photo" />
			<StepDescription currentStep={currentStep} />
			<Steps totalSteps={totalSteps} currentStep={currentStep} />
			<Divider />
			{currentStep === 1 && (
				<Camera currentStep={currentStep} setCurrentStep={setCurrentStep} />
			)}
			{currentStep === 2 && (
				<AddLocationData
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
				/>
			)}
			{currentStep === 3 && (
				<AddFilter currentStep={currentStep} setCurrentStep={setCurrentStep} />
			)}
			{currentStep === 4 && (
				<AddDescription
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
				/>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
`;

export default NewPhotoPage;
