export function deletePhoto(context, updateContext, id) {
	const newPhotosArr = context.savedPhotos.filter((photo) => photo.id !== id);
	updateContext({ savedPhotos: newPhotosArr });
}
