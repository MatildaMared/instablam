import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import styled from "styled-components";
import Divider from "./Divider";
import { nanoid } from "nanoid";

function CaptionForm() {
	const [context, updateContext] = useContext(Context);
	const [description, setDescription] = useState("");
	const [altText, setAltText] = useState("");
	const navigate = useNavigate();

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const photo = {
			id: nanoid(),
			src: context.photo,
			filter: context.filter,
			date: new Date().toLocaleDateString(),
			location: context.location,
			description: description,
			alt: altText,
		};

		const newPhotosArray = [photo, ...context.savedPhotos];

		updateContext({
			savedPhotos: newPhotosArray,
			photo: null,
			location: null,
			filter: null,
			stream: null,
		});

		navigate("/");
	};

	return (
		<Wrapper onSubmit={onSubmitHandler}>
			<FormGroup>
				<Input
					name="description"
					onChange={(e) => setDescription(e.target.value)}
					rows="5"
				></Input>
				<Label htmlFor="description">Description</Label>
			</FormGroup>
			<Divider />
			<FormGroup>
				<Input
					name="altText"
					onChange={(e) => setAltText(e.target.value)}
					rows="3"
				></Input>
				<Label htmlFor="altText">Photo description*</Label>
				<Description>
					*For accessibility reasons, please also provide a text describing the
					photo itself for those using a screen reader. 😊
				</Description>
			</FormGroup>
			<SubmitBtn type="submit">Upload Photo</SubmitBtn>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	width: 100%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 0.5rem;
`;

const FormGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 0.5rem 0;
`;

const Label = styled.label`
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	background-color: var(--color-background);
	position: absolute;
	top: 0px;
	left: 12px;
	padding: 0 6px;
	margin-top: 0;
	transition: color 0.3s, transform 0.3s;
`;

const Input = styled.textarea`
	padding: 0.5rem 1rem;
	border: 2px solid var(--color-white);
	background-color: transparent;
	border-radius: 8px;
	resize: none;
	transition: border-color 0.3s;
	color: var(--color-white);

	&:hover,
	&:focus {
		border-color: var(--color-accent);

		& ~ label {
			color: var(--color-accent);
		}
	}

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;

		& ~ label {
			transform: translateY(-3px);
		}
	}
`;

const Description = styled.p`
	font-size: 0.9rem;
	margin-top: 0.5rem;
	padding: 0 1rem;
`;

const SubmitBtn = styled.button`
	background-color: var(--color-accent);
	border: 2px solid transparent;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	color: var(--color-white);
	cursor: pointer;
	transition: background-color 0.3s, border 0.3s;
	margin: 0.5rem 0;
	font-size: 1rem;

	&:hover {
		background-color: var(--color-background);
		border: 2px solid var(--color-accent);
	}

	&:focus {
		outline: var(--outline);
		outline-offset: 4px;
	}
`;

export default CaptionForm;
