import React, { useContext } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { Context } from "./../context/Context";

function GalleryPage() {
	const [context] = useContext(Context);
	const photos = context.savedPhotos;

	return (
		<Grid>
			{photos.map((image) => (
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
	margin-bottom: 1rem;
`;

export default GalleryPage;
