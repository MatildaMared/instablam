import React, { useContext } from "react";
import { takePhoto } from "../utils/cameraHelper";
import { Context } from "../context/Context";

function TakePhotoBtn() {
	const [context, updateContext] = useContext(Context);
	const stream = context.stream;

	const clickHandler = async () => {
		let blob = await takePhoto(stream);
		updateContext({
			photo: blob,
		});
	};
	return <button onClick={clickHandler}>Take Photo</button>;
}

export default TakePhotoBtn;
