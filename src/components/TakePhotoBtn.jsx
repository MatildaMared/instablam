import React from "react";
import { takePhoto } from "../utils/cameraHelper";

function TakePhotoBtn({ stream, setPhoto }) {
	const clickHandler = async () => {
		let blob = await takePhoto(stream);
		setPhoto(blob);
	};
	return <button onClick={clickHandler}>Take Photo</button>;
}

export default TakePhotoBtn;
