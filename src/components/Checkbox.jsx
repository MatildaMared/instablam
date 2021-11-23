import React from "react";
import styled from "styled-components";

function Checkbox({ checked, onChange, text }) {
	return (
		<Wrapper>
			<Label onChange={onChange}>
				{text}
				<HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
				<Checkmark></Checkmark>
			</Label>
		</Wrapper>
	);
}

const HiddenCheckbox = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: hsla(0, 0%, 100%, 0.1);
	border-radius: 4px;

	&::after {
		content: "";
		position: absolute;
		display: none;
		left: 9px;
		top: 2px;
		width: 8px;
		height: 16px;
		border: solid var(--color-accent);
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	${HiddenCheckbox}:focus + & {
		outline: var(--outline);
		outline-offset: 4px;
	}

	${HiddenCheckbox}:checked + &::after {
		display: block;
	}
`;

const Wrapper = styled.div`
	margin: 0.5rem 0;
	display: inline-block;
	position: relative;
	padding-left: 35px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;

	&:hover ${Checkmark} {
		background-color: hsla(0, 0%, 100%, 0.2);
	}
`;

const Label = styled.label`
	font-size: 1rem;
	cursor: pointer;
`;

export default Checkbox;
