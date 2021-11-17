import React from "react";
import { MapPin, Calendar, XSquare } from "react-feather";
import styled from "styled-components";

function Card({ info }) {
	return (
		<CardWrapper>
			<Header>
				<DetailsWrapper>
					<Calendar size={16} strokeWidth={1} />
					<p>{info.date}</p>
				</DetailsWrapper>
				<DeleteBtn aria-label="Delete Image">
					<XSquare />
				</DeleteBtn>
			</Header>
			<ImageWrapper>
				<Image src={info.src} alt={info.alt} />
			</ImageWrapper>
			<DetailsWrapper>
				<MapPin size={16} strokeWidth={1} />
				<p>{info.location}</p>
			</DetailsWrapper>
			<Description>{info.description}</Description>
		</CardWrapper>
	);
}

const CardWrapper = styled.article`
	border: 1px solid hsla(0, 0%, 100%, 0.1);
	padding: 1rem;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
`;

const DeleteBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: none;
	color: var(--color-white);
	padding: 0;
	margin: 0;
	cursor: pointer;
	transition: color, transform 0.3s;

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}

	&:hover {
		color: var(--color-accent);
		transform: rotate(15deg);
	}
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const ImageWrapper = styled.div`
	background: var(--gradient);
	padding: 4px;
	margin-bottom: 1rem;
`;

const DetailsWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 1px;

	& svg {
		margin-right: 0.5rem;
	}
`;

const Description = styled.p`
	margin-top: 0.5rem;
	line-height: 1.4;
`;

export default Card;
