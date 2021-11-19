import React, { useState, useContext } from "react";
import Camera from "../components/Camera";
import Steps from "../components/Steps";
import Divider from "../components/Divider";
import styled from "styled-components";
import AddLocationData from "../components/AddLocationData";
import StepDescription from "../components/StepDescription";
import Heading from "../components/Heading";
import { Context } from "../context/Context";

function NewPhotoPage() {
	const [context, updateContext] = useContext(Context);
	const totalSteps = context.totalSteps;
	const currentStep = context.currentStep;

	return (
		<Wrapper>
			<Heading text="Add new photo" />
			<StepDescription currentStep={currentStep} />
			<Divider />
			{currentStep === 1 && <Camera />}
			{currentStep === 2 && <AddLocationData />}
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

export default NewPhotoPage;
