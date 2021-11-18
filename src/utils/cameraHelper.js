export async function cameraOff(
	videoElement,
	updateCameraState,
	stream,
	setStream
) {
	videoElement.srcObject = null;
	stream.getTracks().forEach((track) => {
		track.stop();
	});
	updateCameraState();
	setStream(null);
}

export async function cameraOn(
	videoElement,
	setStatusMessage,
	updateCameraState,
	setStream
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
		setStream(stream);

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
    console.log("Stream is: ", stream);
		const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
		let blob = await imageCapture.takePhoto();
    return blob;
	} catch (err) {
		console.log("There was an error!");
    console.log(err.message);
    return null;
	}
}