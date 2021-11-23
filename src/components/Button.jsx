import React from "react";
import styled from "styled-components";

function Button({ onClick, children, secondary, ghost }) {
	return (
		<>
			{!secondary && !ghost && (
				<PrimaryButton onClick={onClick}> {children}</PrimaryButton>
			)}
			{secondary && (
				<SecondaryButton onClick={onClick}>{children}</SecondaryButton>
			)}
			{ghost && <GhostButton onClick={onClick}>{children}</GhostButton>}
		</>
	);
}

const ButtonBase = styled.button`
	display: block;
	margin: 0.5rem auto;
	color: var(--color-white);
	border: none;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	font-size: 1rem;
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

const GhostButton = styled.button`
	display: block;
	margin: 0 auto;
	margin-bottom: 0.5rem;
	padding: 0;
	color: var(--color-accent);
	font-size: 1rem;
	background-color: transparent;
	border: 2px solid transparent;
	transition: border 0.3s;
	cursor: pointer;

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}

	&:hover {
		border-bottom: 2px solid var(--color-accent);
	}
`;

export default Button;
