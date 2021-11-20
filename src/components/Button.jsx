import React from "react";
import styled from "styled-components";

function Button({ onClick, children, secondary }) {
	return !secondary ? (
		<PrimaryButton onClick={onClick}> {children}</PrimaryButton>
	) : (
		<SecondaryButton onClick={onClick}>{children}</SecondaryButton>
	);
}

const ButtonBase = styled.button`
	display: block;
	margin: 0.5rem auto;
	color: var(--color-white);
	border: none;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	font-size: 0.8rem;
	cursor: pointer;
	border: 2px solid transparent;
	transition: border 0.3s, color 0.3s, background-color 0.3s;

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}
`;

const PrimaryButton = styled(ButtonBase)`
	background-color: var(--color-accent);

	&:hover {
		background-color: var(--color-dark);
		border: 2px solid var(--color-white);
	}
`;

const SecondaryButton = styled(ButtonBase)`
	background-color: var(--color-dark);
	border: 2px solid var(--color-accent);
	color: var(--color-accent);

	&:hover {
		color: var(--color-white);
		border: 2px solid var(--color-white);
	}
`;

export default Button;
