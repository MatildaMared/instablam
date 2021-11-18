import React from "react";
import styled from "styled-components";

function Photo({ photo }) {
	return (
		<PhotoElem
			src={URL.createObjectURL(photo)}
			alt="photo taken with user camera"
		></PhotoElem>
	);
}

const PhotoElem = styled.img`
	width: 300px;
	height: 300px;
`;

export default Photo;
