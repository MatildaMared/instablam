import React, { useContext } from "react";
import { takePhoto } from "../utils/cameraHelper";
import { Context } from "../context/Context";

function TakePhotoBtn({ videoRef, canvasRef }) {
	const [context, updateContext] = useContext(Context);

	const clickHandler = async () => {
		const photo = await takePhoto(videoRef, canvasRef);
		updateContext({
			photo: photo,
		});
	};
	return <button onClick={clickHandler}>Take Photo</button>;
}

export default TakePhotoBtn;
