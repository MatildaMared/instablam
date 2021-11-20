import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import ToggleCameraBtn from "./ToggleCameraBtn";
import { cameraOn, cameraOff } from "../utils/cameraHelper";
import TakePhotoBtn from "./TakePhotoBtn";
import Photo from "./Photo";
import ChoosePhotoBtns from "./ChoosePhotoBtns";
import { Context } from "../context/Context";

const Camera = ({ setPhoto, photo, currentStep, setCurrentStep }) => {
	const [context, updateContext] = useContext(Context);
	const [canUseMd, setCanUseMd] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [cameraIsOn, setCameraIsOn] = useState(false);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		if (navigator.mediaDevices) {
			setCanUseMd(true);
		}
	}, []);

	const handleCameraToggle = () => {
		if (!cameraIsOn) {
			setStatusMessage("");
			cameraOn(
				videoRef.current,
				setStatusMessage,
				() => setCameraIsOn(true),
				updateContext
			);
		} else {
			cameraOff(
				videoRef.current,
				() => setCameraIsOn(false),
				context,
				updateContext
			);
		}
	};

	return (
		<section>
			{canUseMd ? (
				<>
					{context.photo ? (
						<Photo size={300} />
					) : (
						<VideoWrapper>
							<Canvas ref={canvasRef} width="300" height="245"></Canvas>
							<Video ref={videoRef} playsinline></Video>
						</VideoWrapper>
					)}
				</>
			) : (
				<p>Your device does not support mediaDevices.</p>
			)}
			<p>{statusMessage}</p>
			{!context.photo && (
				<ToggleCameraBtn onClick={handleCameraToggle} cameraIsOn={cameraIsOn} />
			)}
			{cameraIsOn && !context.photo && (
				<TakePhotoBtn videoRef={videoRef} canvasRef={canvasRef} />
			)}
			{context.photo && <ChoosePhotoBtns />}
		</section>
	);
};

const Video = styled.video`
	width: 300px;
	height: 245px;
	background-color: var(--color-background);
	margin-bottom: -6px;
`;

const VideoWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 4px;
	background-image: var(--gradient);
	margin: 0.5rem 0;
	position: relative;
`;

const Canvas = styled.canvas`
	position: absolute;
`;

export default Camera;
