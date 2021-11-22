import React, { useState, useEffect, useContext } from "react";
import Photo from "./Photo";
import styled from "styled-components";
import Button from "./Button";
import StatusMessage from "./StatusMessage";
import DisplayChoice from "./DisplayChoice";
import { Context } from "../context/Context";
import {
	getCoordinates,
	convertCoordinates,
	getLocationString,
} from "../utils/locationHelper";
import Divider from "./Divider";

function AddLocationData({ currentStep, setCurrentStep }) {
	const [, updateContext] = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [canUseGeo, setCanUseGeo] = useState(false);
	const [location, setLocation] = useState("Unknown");

	useEffect(() => {
		if (navigator.geolocation) {
			setCanUseGeo(true);
		} else {
			setStatusMessage(
				"Your device does not support Geolocation unfortunately!"
			);
		}
	}, []);

	const onAddLocation = async () => {
		try {
			setStatusMessage("Loading...");
			setIsLoading(true);
			const data = await getCoordinates();
			const position = await convertCoordinates(data.coords);
			const locationString = getLocationString(position);
			setStatusMessage("");
			setIsLoading(false);
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
			<DisplayChoice choiceHeader="Location" choice={location} />
			{canUseGeo ? (
				<>
					<ButtonsWrapper>
						{location !== "Unknown" ? (
							<Button onClick={onConfirmLocation}>Next</Button>
						) : (
							<Button onClick={onAddLocation}>Get location</Button>
						)}
						<Button onClick={onSkipLocation} secondary={true}>
							Skip this step
						</Button>
					</ButtonsWrapper>
				</>
			) : (
				<>
					<p>Your device does not support </p>
				</>
			)}
			{statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
			<Divider />
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

export default AddLocationData;
