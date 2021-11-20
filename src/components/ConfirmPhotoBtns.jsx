import React, { useContext } from "react";
import { Context } from "../context/Context";

function ConfirmPhotoBtns({ setCurrentStep, turnOffCamera }) {
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
			<p>Would you like to use this photo? 😀</p>
			<div>
				<button onClick={onYesHandler}>Yes!</button>
				<button onClick={onNoHandler}>No please</button>
			</div>
		</>
	);
}

export default ConfirmPhotoBtns;
