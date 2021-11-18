import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ToggleCameraBtn from "./ToggleCameraBtn";
import { cameraOn, cameraOff } from "../utils/cameraHelper";
import TakePhotoBtn from "./TakePhotoBtn";
import Photo from "./Photo";
import ChoosePhotoBtns from "./ChoosePhotoBtns";

const Camera = ({ setPhoto, photo, currentStep, setCurrentStep }) => {
	const [canUseMd, setCanUseMd] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [cameraIsOn, setCameraIsOn] = useState(false);
	const [stream, setStream] = useState(null);
	const videoRef = useRef(null);

	useEffect(() => {
		if (navigator.mediaDevices) {
			setCanUseMd(true);
		}
	}, []);

	useEffect(() => {
		console.log("Stream: ", stream);
	}, [stream]);

	useEffect(() => {
		if (photo !== null) {
			console.log("Photo taken!");
		}
	}, [photo]);

	const handleCameraToggle = () => {
		if (!cameraIsOn) {
			setStatusMessage("");
			cameraOn(
				videoRef.current,
				setStatusMessage,
				() => setCameraIsOn(true),
				setStream
			);
		} else {
			cameraOff(
				videoRef.current,
				() => setCameraIsOn(false),
				stream,
				setStream
			);
		}
	};

	return (
		<CameraContainer>
			{canUseMd ? (
				<VideoWrapper>
					{photo ? <Photo photo={photo} /> : <Video ref={videoRef}></Video>}
				</VideoWrapper>
			) : (
				<p>Your device does not support mediaDevices.</p>
			)}
			<p>{statusMessage}</p>
			{!photo && (
				<ToggleCameraBtn onClick={handleCameraToggle} cameraIsOn={cameraIsOn} />
			)}
			{cameraIsOn && !photo && (
				<TakePhotoBtn stream={stream} setPhoto={setPhoto} />
			)}
			{photo && (
				<ChoosePhotoBtns
					setPhoto={setPhoto}
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
				/>
			)}
		</CameraContainer>
	);
};

const CameraContainer = styled.div``;

const Video = styled.video`
	width: 300px;
	height: 300px;
	background-color: var(--color-background);
	margin-bottom: -6px;
`;

const VideoWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 4px;
	background-image: var(--gradient);
	margin: 0.5rem 0;
`;

export default Camera;
