import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import ToggleCameraBtn from "./ToggleCameraBtn";
import {
	cameraOn,
	cameraOff,
	takePhoto,
	closeStream,
} from "../utils/cameraHelper";
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
			if (context.allowNotifications) {
				new Notification("Photo taken! 📸", {
					body: "Looking good today! 😎",
					icon: photo,
					image: photo,
				});
			}
		}
		closeStream(context.stream);
		updateContext({
			photo: photo,
			stream: null,
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
							<Video ref={videoRef} playsinline autoplay></Video>
							{videoRef.current && (
								<>
									<VideoOverlay
										width={videoRef.current.offsetWidth}
										height={videoRef.current.offsetHeight}
									/>
									<Canvas
										ref={canvasRef}
										width={videoRef.current.videoWidth}
										height={videoRef.current.videoHeight}
									></Canvas>
								</>
							)}
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
						onChange={() => setUseDelay(!useDelay)}
						text={"Add 3 second delay"}
					/>
					<Text>
						Hey gorgeous! If you go to settings and allow us to send you
						notifications, you will recieve a notification when a photo is taken
						with delay. Great huh? 🤩
					</Text>
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
	height: auto;
	min-height: 220px;
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

const VideoOverlay = styled.div`
	top: ${(props) => (props.width > props.height ? "4px" : "50%")};
	position: absolute;
	top: 4px;
	height: ${(props) =>
		props.height > props.width ? props.width : props.height}px;
	width: ${(props) =>
		props.height > props.width ? props.width : props.height}px;
	background-color: transparent;
	border: 4px dashed hsla(333, 85%, 10%, 0.5);
	left: ${(props) => (props.width > props.height ? "50%" : "4px")};
	transform: ${(props) =>
		props.width > props.height ? "translateX(-50%)" : "translateY(-50%)"};
`;

const Canvas = styled.canvas`
	position: absolute;
	display: none;
`;

const Text = styled.p`
	max-width: 350px;
	font-size: 0.8rem;
	margin: 0.5rem 0;
`;

export default Camera;
