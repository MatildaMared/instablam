import React, { useContext } from "react";
import { Context } from "./../context/Context";

function ChoosePhotoBtns() {
	const [context, updateContext] = useContext(Context);
	const currentStep = context.currentStep;

	const onYesHandler = () => {
		updateContext({
			currentStep: currentStep + 1,
		});
	};

	const onNoHandler = () => {
		console.log(context.stream);
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

export default ChoosePhotoBtns;
