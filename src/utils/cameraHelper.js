export async function cameraOff(videoElement, updateCameraState) {
	videoElement.srcObject = null;
	updateCameraState();
}

export async function cameraOn(
	videoElement,
	setStatusMessage,
	updateCameraState
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

		videoElement.addEventListener("loadedmetadata", () => {
			videoElement.play();
			updateCameraState();
		});
	} catch (error) {
		console.error(error.message);
		setStatusMessage(error.message);
	}
}
