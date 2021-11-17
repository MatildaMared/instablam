import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { nanoid } from "nanoid";

const images = [
	{
		id: nanoid(),
		src: "/img/example-image-1.jpeg",
		alt: "empty beach with pink and white clouds in the sky reflecting in the water",
		date: new Date().toLocaleDateString(),
		location: "Phuket, Thailand",
		description:
			"I came across this beach on my last trip abroad. What do you think? 🤩 It was lovely and the sky was even more beautiful in real life!",
	},
	{
		id: nanoid(),
		src: "/img/example-image-2.jpeg",
		alt: "a nice looking room with white wooden floor, grey stylish interior and an open door leading to a terrace",
		date: new Date().toLocaleDateString(),
		location: "Halmstad, Sweden",
		description:
			"We just renovated the bedroom and I really love the gray color, it's so calming! 🥰",
	},
	{
		id: nanoid(),
		src: "/img/example-image-2.jpeg",
		alt: "a nice looking room with white wooden floor, grey stylish interior and an open door leading to a terrace",
		date: new Date().toLocaleDateString(),
		location: "Halmstad, Sweden",
		description:
			"We just renovated the bedroom and I really love the gray color, it's so calming! 🥰",
	},
];

function GalleryPage() {
	return (
		<Grid>
			{images.map((image) => (
				<Card info={image} key={image.id} />
			))}
		</Grid>
	);
}

const Grid = styled.main`
	margin: 1rem 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	grid-gap: 1rem;
`;

export default GalleryPage;
