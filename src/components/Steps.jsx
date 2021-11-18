import React from "react";
import { Check } from "react-feather";
import styled from "styled-components";

function Steps({ totalSteps, currentStep }) {
	console.log(currentStep);
	return (
		<Wrapper>
			<ProgressBar>
				<Progress currentStep={currentStep} totalSteps={totalSteps} />
			</ProgressBar>
			{[...Array(totalSteps)].map((_, i) => (
				<Step
					key={i + 1}
					className={
						(i + 1 === currentStep ? "active" : "") +
						(currentStep > i + 1 ? "complete" : "")
					}
				>
					{currentStep > i + 1 ? (
						<Check size={16} strokeWidth={3} />
					) : (
						<span>{i + 1}</span>
					)}
				</Step>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 250px;
	margin: 0 auto;
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

const ProgressBar = styled.div`
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: white;
	z-index: -1;
`;

const Progress = styled.div`
	width: ${(props) =>
		(100 / (props.totalSteps - 1)) * (props.currentStep - 1) + "%"};
	height: 2px;
	background-color: var(--color-accent);
`;

const Step = styled.div`
	height: 35px;
	width: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	padding: 0.5rem;
	background-color: var(--color-background);
	border-radius: 100%;
	border: 2px solid var(--color-white);
	font-size: 0.8rem;

	&.active {
		background-color: var(--color-accent);
		border: transparent;
	}

	&.complete {
		color: var(--color-accent);
		border: 2px solid var(--color-accent);
	}
`;

export default Steps;
