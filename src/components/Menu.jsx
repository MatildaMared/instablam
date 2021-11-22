import React from "react";
import { Link } from "react-router-dom";
import { Camera, Grid, Settings } from "react-feather";
import styled from "styled-components";

function Menu() {
	return (
		<nav>
			<List>
				<Item>
					<Link to="/new" aria-label="Take Photo">
						<Camera size={26} />
					</Link>
				</Item>
				<Item>
					<Link to="/" aria-label="Gallery">
						<Grid size={26} />
					</Link>
				</Item>
				<Item>
					<Link to="/settings" aria-label="Settings">
						<Settings size={26} />
					</Link>
				</Item>
			</List>
		</nav>
	);
}

const List = styled.ul`
	display: flex;
	line-height: 0;
	margin: 0;
	padding: 0;

	& a {
		display: block;
		height: 100%;
		color: var(--color-white);
		transition: color, transform 0.3s;
		border-radius: 2px;	

		&:focus {
			outline: var(--outline);
			outline-offset: 4px;
		}

		&:hover {
			color: var(--color-accent);
			transform: rotate(15deg);
		}
	}
`;

const Item = styled.li`
	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;

export default Menu;
