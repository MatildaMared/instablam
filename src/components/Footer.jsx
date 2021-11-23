import React from "react";
import { Heart, GitHub, Linkedin, Mail } from "react-feather";
import SrText from "../components/SrText";
import styled from "styled-components";

function Footer() {
	return (
		<Wrapper>
			<Content>
				<nav>
					<List>
						<Item>
							<Link href="mailto:matildamared@live.se">
								<Mail size={28} />
								<SrText>Email</SrText>
							</Link>
						</Item>
						<Item>
							<Link href="https://github.com/MatildaMared" target="_blank">
								<GitHub size={28} />
								<SrText>GitHub</SrText>
							</Link>
						</Item>
						<Item>
							<Link
								href="https://linkedin.com/in/matilda-mared"
								target="_blank"
							>
								<Linkedin size={28} />
								<SrText>LinkedIn</SrText>
							</Link>
						</Item>
					</List>
				</nav>
				<Heading>
					Made with love <Heart size={16} strokeWidth={2} /> 2021
				</Heading>
				<Signature src="signature.png" alt="Matilda Mared" />
			</Content>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	padding: 1rem;
	border-top: 1px solid hsla(0, 0%, 12%, 1);
`;

const Content = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Heading = styled.p`
	margin: 0.25rem 0;
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	user-select: none;
	position: relative;
	opacity: 0.7;

	& svg {
		margin-left: 0.25rem;
		margin-right: 0.25rem;
		margin-top: -1px;
		stroke: var(--color-accent);
	}

	&::before,
	&::after {
		content: "";
		width: 50px;
		height: 1px;
		background-color: var(--color-accent);
		position: absolute;
		top: 50%;
	}

	&::before {
		left: -60px;
	}

	&::after {
		right: -60px;
	}
`;

const List = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	margin-bottom: 0.25rem;
`;

const Item = styled.li`
	&:not(:last-of-type) {
		margin-right: 0.5rem;
	}
`;

const Link = styled.a`
	display: block;
	line-height: 1;
	color: hsla(0, 0%, 100%, 0.5);
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
`;

const Signature = styled.img`
	width: 100px;
	height: auto;
`;

export default Footer;
