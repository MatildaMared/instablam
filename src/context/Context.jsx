import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [context, setContext] = useState({
		allowNotifications: false,
		stream: null,
		photo: null,
		location: null,
		filter: null,
		savedPhotos: [
			{
				id: nanoid(),
				src: "/example-image-1.jpg",
				filter: "",
				alt: "empty beach with pink and white clouds in the sky reflecting in the water",
				date: new Date().toLocaleDateString(),
				location: "Phuket, Thailand",
				description:
					"I came across this beach on my last trip abroad. What do you think? 🤩 It was lovely and the sky was even more beautiful in real life!",
			},
			{
				id: nanoid(),
				src: "/example-image-2.jpg",
				filter: "",
				alt: "a nice looking room with white wooden floor, grey stylish interior and an open door leading to a terrace",
				date: new Date().toLocaleDateString(),
				location: "Halmstad, Sweden",
				description:
					"We just renovated the bedroom and I really love the gray color, it's so calming! 🥰",
			},
		],
	});

	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem("instablamData"));
		if (localData) {
			setContext({
				...context,
				...localData,
			});
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("instablamData", JSON.stringify(context));
	}, [context]);

	function updateContext(updates) {
		setContext((prevState) => {
			return {
				...prevState,
				...updates,
			};
		});
	}

	const value = [context, updateContext];

	return <Context.Provider value={value}>{children}</Context.Provider>;
};
