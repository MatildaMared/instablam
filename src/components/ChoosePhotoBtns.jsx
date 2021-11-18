import React from "react";

function ChoosePhotoBtns({ currentStep, setCurrentStep, setPhoto }) {
	const onYesHandler = () => {
		setCurrentStep(currentStep + 1);
	};

	const onNoHandler = () => {
		setPhoto(null);
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

export default ChoosePhotoBtns;
