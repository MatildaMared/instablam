import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function Photo({ size }) {
	const [context] = useContext(Context);
	const photo = context.photo;

	return (
		<Wrapper>
			<PhotoElem
				src={URL.createObjectURL(photo)}
				alt="photo taken with user camera"
				size={size}
			></PhotoElem>
		</Wrapper>
	);
}

const PhotoElem = styled.img`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
`;

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 4px;
	background-image: var(--gradient);
	margin: 0.5rem 0;
`;

export default Photo;
