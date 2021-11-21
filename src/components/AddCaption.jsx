import React, { useContext } from "react";
import Photo from "./Photo";
import Divider from "./Divider";
import Button from "./Button";
import { Context } from "../context/Context";
import styled from "styled-components";
import { MapPin, Calendar } from "react-feather";

function AddCaption({ currentStep, setCurrentStep }) {
	const [context, updateContext] = useContext(Context);

	const onBackHandler = () => {
		// updateContext({
		//   caption: null,
		// });
		setCurrentStep(currentStep - 1);
	};

	return (
		<Wrapper>
			<Photo size={300} url={context.photo} filter={context.filter} />
			<DetailsWrapper>
				<Calendar />
				<Description>{new Date().toLocaleDateString()}</Description>
			</DetailsWrapper>
			<DetailsWrapper>
				<MapPin />
				<Description>{context.location}</Description>
			</DetailsWrapper>
			<Divider />
			<Button onClick={onBackHandler} ghost={true}>
				Go back
			</Button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DetailsWrapper = styled.div`
	display: flex;
	align-items: center;

	& svg {
		margin-right: 0.5rem;
	}
`;

const Description = styled.p``;

export default AddCaption;
