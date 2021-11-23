import React, { useContext, useRef } from "react";
import { MapPin, Calendar, XSquare, Download } from "react-feather";
import styled from "styled-components";
import { Context } from "./../context/Context";
import { deletePhoto, downloadPhoto } from "./../utils/galleryHelper";

function Card({ info }) {
	const [context, updateContext] = useContext(Context);
	const linkRef = useRef(null);

	function onDelete() {
		deletePhoto(context, updateContext, info.id);
	}

	function onDownload() {
		downloadPhoto(info.src, linkRef);
	}

	return (
		<CardWrapper>
			<Header>
				<DetailsWrapper>
					<Calendar size={16} strokeWidth={1} />
					<p>{info.date}</p>
				</DetailsWrapper>
				<ButtonsWrapper>
					<Btn aria-label="Download Image" onClick={onDownload}>
						<DownloadLink ref={linkRef} href={info.src} />
						<Download />
					</Btn>
					<Btn aria-label="Delete Image" onClick={onDelete}>
						<XSquare />
					</Btn>
				</ButtonsWrapper>
			</Header>
			<ImageWrapper>
				<ContainAspectRatio>
					<Image
						src={info.src}
						alt={info.alt}
						className={`filter-${info.filter}`}
					/>
				</ContainAspectRatio>
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

const Btn = styled.button`
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
	border-radius: 2px;

	&:not(:last-child) {
		margin-right: 0.5rem;
	}

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
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const ContainAspectRatio = styled.div`
	position: relative;
	width: 100%;

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
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

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const DownloadLink = styled.a`
	display: none;
`;

export default Card;
