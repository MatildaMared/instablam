const auth = "905642101577985984732x56434";

export function getCoordinates() {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

export async function convertCoordinates(coords) {
	try {
		const response = await fetch(
			`https://geocode.xyz/${coords.latitude},${coords.longitude}?geoit=json&auth=${auth}`
		);
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}

export function getLocationString(position) {
	return `${position.city}, ${position.country}`;
}
