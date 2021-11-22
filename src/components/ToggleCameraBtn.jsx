import React from "react";
import styled from "styled-components";
import { ToggleLeft, ToggleRight } from "react-feather";

function ToggleCameraBtn({ onClick, cameraIsOn }) {
	return (
		<Button onClick={onClick}>
			{cameraIsOn ? (
				<ToggleRight size={20} strokeWidth={1} />
			) : (
				<ToggleLeft size={20} strokeWidth={1} />
			)}
			<span>{cameraIsOn ? "Turn camera off" : "Turn camera on"}</span>
		</Button>
	);
}

const Button = styled.button`
	padding: 2px;
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: inherit;
	cursor: pointer;
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	transition: color 0.3s;
	margin: 0 auto;
	border-radius: 2px;

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}

	&:hover {
		color: var(--color-accent);
	}

	& span {
		margin-top: 1px;
		margin-left: 0.25rem;
	}
`;

export default ToggleCameraBtn;
