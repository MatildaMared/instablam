import React from "react";
import { Check } from "react-feather";
import styled from "styled-components";
import SrText from "./SrText";

function Steps({ totalSteps, currentStep }) {
	return (
		<Wrapper aria-label="progress">
			<ProgressBar>
				<Progress currentStep={currentStep} totalSteps={totalSteps} />
			</ProgressBar>
			{[...Array(totalSteps)].map((_, i) => (
				<Step
					key={i + 1}
					aria-current={currentStep === i + 1 ? "true" : ""}
					className={
						(i + 1 === currentStep ? "active" : "") +
						(currentStep > i + 1 ? "complete" : "")
					}
				>
					{currentStep > i + 1 ? (
						<>
							<Check size={18} strokeWidth={2} />
							<SrText text="This step is completed" />
						</>
					) : (
						<>
							<span>{i + 1}</span>
							{currentStep < i + 1 && (
								<SrText text="This step is not completed" />
							)}
						</>
					)}
				</Step>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.ol`
	padding: 0;
	width: 200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	list-style: none;
`;

const ProgressBar = styled.li`
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

const Step = styled.li`
	margin: 2px 0;
	height: 25px;
	width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	padding: 0.25rem;
	background-color: var(--color-background);
	border-radius: 100%;
	border: 2px solid var(--color-white);
	font-size: 0.8rem;
	user-select: none;

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
