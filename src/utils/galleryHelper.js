export function deletePhoto(context, updateContext, id) {
	const newPhotosArr = context.savedPhotos.filter((photo) => photo.id !== id);
	updateContext({ savedPhotos: newPhotosArr });
}

export function downloadPhoto(url, linkRef) {
	let link = linkRef.current;
	link.download = "photo.png";
	link.click();
}
