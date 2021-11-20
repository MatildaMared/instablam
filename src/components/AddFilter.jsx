import React, { useContext } from "react";
import { Context } from "../context/Context";
import Button from "./Button";

function AddFilter({ currentStep, setCurrentStep }) {
	const [context, setContext] = useContext(Context);

	const onBackHandler = () => {
		setContext({
			location: null,
		});
		setCurrentStep(currentStep - 1);
	};

	return (
		<div>
			<h1>Add Filter</h1>
			<Button onClick={onBackHandler} ghost={true}>
				Go back
			</Button>
		</div>
	);
}

export default AddFilter;
