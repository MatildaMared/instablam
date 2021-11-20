import React, { useState, useEffect, useContext } from "react";
import Photo from "./Photo";
import styled from "styled-components";
import Button from "./Button";
import StatusMessage from "./StatusMessage";
import { Context } from "../context/Context";
import {
	getCoordinates,
	convertCoordinates,
	getLocationString,
} from "../utils/locationHelper";

function AddLocationData({ currentStep, setCurrentStep }) {
	const [context, updateContext] = useContext(Context);
	const [statusMessage, setStatusMessage] = useState("");
	const [canUseGeo, setCanUseGeo] = useState(false);
	const [location, setLocation] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			setCanUseGeo(true);
		} else {
			setStatusMessage(
				"Your device does not support Geolocation unfortunately!"
			);
		}
	});

	const onAddLocation = async () => {
		try {
			setStatusMessage("Loading...");
			const data = await getCoordinates();
			const position = await convertCoordinates(data.coords);
			const locationString = getLocationString(position);
			setStatusMessage("");
			setLocation(locationString);
		} catch (err) {
			setStatusMessage(
				"Something went wrong, please check your browser settings to make sure to allow the app to use your location data! 🙂"
			);
		}
	};

	const onSkipLocation = () => {
		setLocation(null);
		updateContext({
			location: "Unknown",
		});
		setCurrentStep(currentStep + 1);
	};

	const onConfirmLocation = () => {
		updateContext({
			location: location,
		});
		setCurrentStep(currentStep + 1);
	};

	const onBackHandler = () => {
		updateContext({
			location: null,
			photo: null,
		});
		setCurrentStep(currentStep - 1);
	};

	return (
		<>
			<Photo size={200} />
			{!location ? (
				<>
					<ButtonsWrapper>
						<Button onClick={onAddLocation}>Get location</Button>
						<Button onClick={onSkipLocation} secondary={true}>
							Skip this step
						</Button>
					</ButtonsWrapper>
					{statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
				</>
			) : (
				<>
					<LocationHeader>Your location</LocationHeader>
					<Location>{location}</Location>
					<ButtonsWrapper>
					<Button onClick={onConfirmLocation}>Next</Button>
						<Button onClick={onSkipLocation} secondary={true}>
							Skip this step
						</Button>
					</ButtonsWrapper>
				</>
			)}
			<Button onClick={onBackHandler} ghost={true}>
				Go back
			</Button>
		</>
	);
}

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;

	& button:not(:last-child) {
		margin-right: 0.5rem;
	}
`;

const Location = styled.p`
	margin-bottom: 0.5rem;
`;

const LocationHeader = styled.h2`
	margin-top: 0.5rem;
	text-transform: uppercase;
	font-size: 0.75rem;
	letter-spacing: 1px;
	font-weight: 300;
`;

export default AddLocationData;
