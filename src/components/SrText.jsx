import React from "react";
import styled from "styled-components";

function SrText(props) {
	return <Text>{props.text}</Text>;
}

const Text = styled.span`
	border: none;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;

export default SrText;
