import React, { useState } from "react";
import Camera from "../components/Camera";
import styled from "styled-components";

function Step1() {
	return (
		<main>
			<h1>Step 1</h1>
		</main>
	);
}

function Step2() {
	return (
		<main>
			<h1>Step 2</h1>
		</main>
	);
}

function Step3() {
	return (
		<main>
			<h1>Step 3</h1>
		</main>
	);
}

function Step4() {
	return (
		<main>
			<h1>Step 4</h1>
		</main>
	);
}

function NewPhotoPage() {
	const steps = 4;
	const [currentStep, setCurrentStep] = useState(1);
	return (
		<Wrapper>
			<Heading>Add new photo</Heading>
			<Divider />
			<Camera />
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
	margin: 0.5rem 0;
`;

const Divider = styled.div`
	width: 80px;
	height: 2px;
	background: var(--gradient);
	margin: 0 auto;
	margin-bottom: 0.5rem;
	opacity: 0.75;
`;

export default NewPhotoPage;
