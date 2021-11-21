import React, { useState, useEffect, useContext } from "react";
import Camera from "../components/Camera";
import Steps from "../components/Steps";
import Divider from "../components/Divider";
import styled from "styled-components";
import AddLocationData from "../components/AddLocationData";
import StepDescription from "../components/StepDescription";
import Heading from "../components/Heading";
import { Context } from "../context/Context";
import { closeStream } from "../utils/cameraHelper";
import AddFilter from "../components/AddFilter";

function NewPhotoPage() {
	const [context, updateContext] = useContext(Context);
	const totalSteps = 4;
	const [currentStep, setCurrentStep] = useState(1);

	function resetData() {
		if (context.stream) {
			closeStream(context.stream);
		}
		updateContext({
			photo: null,
			location: null,
			stream: null,
		});
	}

	useEffect(() => {
		resetData();
	}, []);

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
