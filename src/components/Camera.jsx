import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import ToggleCameraBtn from "./ToggleCameraBtn";
import { cameraOn, cameraOff, takePhoto } from "../utils/cameraHelper";
import Photo from "./Photo";
import ConfirmPhoto from "./ConfirmPhoto";
import Checkbox from "./Checkbox";
import { Context } from "../context/Context";
import StatusMessage from "./StatusMessage";
import Button from "./Button";

const Camera = ({ setCurrentStep }) => {
	const [context, updateContext] = useContext(Context);
	const [canUseMd, setCanUseMd] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [cameraIsOn, setCameraIsOn] = useState(false);
	const [useDelay, setUseDelay] = useState(false);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	const onPhotoHandler = async () => {
		let photo;
		if (!useDelay) {
			photo = await takePhoto(videoRef, canvasRef);
		} else {
			for (let i = 3; i > 0; i--) {
				setStatusMessage(`${i}...`);
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
			setStatusMessage("");
			photo = await takePhoto(videoRef, canvasRef);
		}
		updateContext({
			photo: photo,
		});
	};

	useEffect(() => {
		if (navigator.mediaDevices) {
			setCanUseMd(true);
		} else {
			setStatusMessage(
				"Your device does not support mediaDevices unfortunately!"
			);
		}
	}, []);

	useEffect(() => {
		if (context.photo) {
			setCameraIsOn(false);
		}
	}, [context, updateContext]);

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
			setStatusMessage("");
			cameraOff(
				videoRef.current,
				() => setCameraIsOn(false),
				context,
				updateContext
			);
		}
	};

	return (
		<Wrapper>
			{canUseMd && (
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
			)}
			{!context.photo && (
				<ToggleCameraBtn onClick={handleCameraToggle} cameraIsOn={cameraIsOn} />
			)}
			{statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
			{cameraIsOn && !context.photo && (
				<>
					<Button onClick={onPhotoHandler}>Take photo</Button>
					<Checkbox
						checked={useDelay}
						setChecked={setUseDelay}
						text={"Add 3 second delay"}
					/>
				</>
			)}
			{context.photo && (
				<ConfirmPhoto
					setCurrentStep={setCurrentStep}
					turnOffCamera={() => {
						cameraOff(
							videoRef.current,
							() => setCameraIsOn(false),
							context,
							updateContext
						);
					}}
				/>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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
	margin: 0 auto;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	position: relative;
`;

const Canvas = styled.canvas`
	position: absolute;
`;

export default Camera;
