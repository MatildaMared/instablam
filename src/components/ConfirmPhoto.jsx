import React, { useContext } from "react";
import { Context } from "../context/Context";
import Button from "./Button";
import styled from "styled-components";

function ConfirmPhoto({ setCurrentStep, turnOffCamera }) {
	const [context, updateContext] = useContext(Context);

	const onYesHandler = () => {
		setCurrentStep(2);
		turnOffCamera();
	};

	const onNoHandler = () => {
		updateContext({
			photo: null,
		});
	};

	return (
		<>
			<Text>Would you like to use this photo? 😀</Text>
			<ButtonsWrapper>
				<Button onClick={onYesHandler}>Yes!</Button>
				<Button onClick={onNoHandler} secondary={true}>
					No, please go back!
				</Button>
			</ButtonsWrapper>
		</>
	);
}

const Text = styled.p`
	text-align: center;
`;

const ButtonsWrapper = styled.div`
	margin: .5rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	& button {
		margin: 0;

		&:not(:last-child) {
			margin-right: 1rem;
	}
`;

export default ConfirmPhoto;
