import React, { useContext } from "react";
import Photo from "./Photo";
import Divider from "./Divider";
import Button from "./Button";
import CaptionForm from "./CaptionForm";
import { Context } from "../context/Context";
import styled from "styled-components";
import { MapPin, Calendar } from "react-feather";

function AddDescription({ currentStep, setCurrentStep }) {
	const [context] = useContext(Context);

	const onBackHandler = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<Wrapper>
			<Photo size={300} url={context.photo} filter={context.filter} />
			<Heading>Details</Heading>
			<DetailsWrapper>
				<Calendar size={16} strokeWidth={1} />
				<Description>{new Date().toLocaleDateString()}</Description>
			</DetailsWrapper>
			<DetailsWrapper>
				<MapPin size={16} strokeWidth={1} />
				<Description>{context.location}</Description>
			</DetailsWrapper>
			<CaptionForm />
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
	width: 100%;
	max-width: 300px;
	margin-bottom: .5rem;

	& svg {
		margin-right: 0.5rem;
	}
`;

const Description = styled.p`
	text-transform: uppercase;
	font-size: 0.75rem;
	letter-spacing: 1px;
`;

const Heading = styled.h2`
	font-family: var(--font-secondary);
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;

export default AddDescription;
