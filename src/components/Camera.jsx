import { useState, useEffect, useRef } from "react";
import { ToggleLeft, ToggleRight } from "react-feather";
import styled from "styled-components";

const Camera = () => {
	const [canUseMd, setCanUseMd] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [cameraIsOn, setCameraIsOn] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		if (navigator.mediaDevices) {
			setCanUseMd(true);
		}
	}, []);

	const handleCameraToggle = () => {
		if (!cameraIsOn) {
			setStatusMessage("");
			cameraOn(videoRef.current, setStatusMessage, () => setCameraIsOn(true));
		} else {
			cameraOff(videoRef.current, () => setCameraIsOn(false));
		}
	};

	return (
		<CameraContainer>
			<ToggleButton onClick={handleCameraToggle}>
				{cameraIsOn ? (
					<ToggleRight size={20} strokeWidth={1} />
				) : (
					<ToggleLeft size={20} strokeWidth={1} />
				)}
				<span>{cameraIsOn ? "Turn camera off" : "Turn camera on"}</span>
			</ToggleButton>
			{canUseMd ? (
				<VideoWrapper>
					<Video ref={videoRef}></Video>
				</VideoWrapper>
			) : (
				<p>Your device does not support mediaDevices.</p>
			)}
			<p>{statusMessage}</p>
		</CameraContainer>
	);
};

const ToggleButton = styled.button`
	padding: 2px;
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: inherit;
	cursor: pointer;
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	transition: color 0.3s;
	margin: 0 auto;

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}

	&:hover {
		color: var(--color-accent);
	}

	& span {
		margin-top: 1px;
		margin-left: 0.25rem;
	}
`;

async function cameraOff(videoElement, updateCameraState) {
	videoElement.srcObject = null;
	updateCameraState();
}

async function cameraOn(videoElement, setStatusMessage, updateCameraState) {
	const constraints = {
		video: {
			facingMode: "user",
			width: { ideal: 300 },
			height: 300,
		},
	};
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		videoElement.srcObject = stream;

		videoElement.addEventListener("loadedmetadata", () => {
			videoElement.play();
			updateCameraState();
		});
	} catch (error) {
		console.error(error.message);
		setStatusMessage(error.message);
	}
}

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
