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
			width: { ideal: 300 },
			height: 300,
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

export async function takePhoto(stream) {
	try {
		const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
		let blob = await imageCapture.takePhoto();
		return blob;
	} catch (err) {
		console.log("There was an error!!g");
		console.log(err.message);
		return null;
	}
}
