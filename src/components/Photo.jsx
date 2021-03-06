import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function Photo({ size, filter }) {
	const [context] = useContext(Context);
	const photo = context.photo;

	return (
		<Wrapper>
			<PhotoElem
				src={photo}
				alt="photo taken with user camera"
				size={size}
				className={`filter-${filter}`}
			></PhotoElem>
		</Wrapper>
	);
}

const PhotoElem = styled.img`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	object-fit: cover;
`;

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 4px;
	background-image: var(--gradient);
	margin: 0 auto;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;

export default Photo;
