import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ToggleCameraBtn from "./ToggleCameraBtn";
import { cameraOn, cameraOff } from "../utils/cameraHelper";

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
			<ToggleCameraBtn onClick={handleCameraToggle} cameraIsOn={cameraIsOn} />
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
