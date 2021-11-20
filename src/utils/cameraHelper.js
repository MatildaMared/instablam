export async function cameraOff(
	videoElement,
	updateCameraState,
	context,
	updateContext
) {
	videoElement.srcObject = null;
	context.stream.getTracks().forEach((track) => {
		track.stop();
	});
	updateCameraState();
	updateContext({
		stream: null,
	});
}

export async function cameraOn(
	videoElement,
	setStatusMessage,
	updateCameraState,
	updateContext
) {
	const constraints = {
		video: {
			facingMode: "user",
			width: 300,
			height: 245,
		},
	};
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		videoElement.srcObject = stream;
		updateContext({
			stream: stream,
		});

		videoElement.addEventListener("loadedmetadata", () => {
			videoElement.play();
			updateCameraState();
		});
	} catch (error) {
		console.error(error.message);
		setStatusMessage(error.message);
	}
}

export async function takePhoto(videoRef, canvasRef) {
	try {
		let context = canvasRef.current.getContext("2d");
		context.drawImage(
			videoRef.current,
			0,
			0,
			canvasRef.current.width,
			canvasRef.current.height
		);
		let photo = canvasRef.current.toDataURL("image/png");
		return photo;
	} catch (err) {
		console.log("There was an error!!");
		console.log(err.message);
		return null;
	}
}
