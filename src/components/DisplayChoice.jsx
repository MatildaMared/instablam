import React from "react";
import styled from "styled-components";

function DisplayChoice({ choiceHeader, choice }) {
	return (
		<ChoiceWrapper>
			<ChoiceHeader>{choiceHeader}</ChoiceHeader>
			<Choice>{choice}</Choice>
		</ChoiceWrapper>
	);
}

const ChoiceWrapper = styled.div`
	margin: 1rem 0 0.5rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 250px;
	border: 1px solid var(--color-accent);
	padding: 0.5rem;
	position: relative;
	border-radius: 8px;
	padding-top: 1rem;
`;

const Choice = styled.p`
	margin-bottom: 0.5rem;
`;

const ChoiceHeader = styled.h2`
	margin-top: 0.5rem;
	text-transform: uppercase;
	font-size: 0.7rem;
	background-color: var(--color-background);
	letter-spacing: 1px;
	font-weight: 300;
	position: absolute;
	top: -16px;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 0.5rem;
	color: var(--color-accent);
`;

export default DisplayChoice;
