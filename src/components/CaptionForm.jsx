import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import Divider from "./Divider";
import Heading from "./Heading";

function CaptionForm() {
	const [context, updateContext] = useContext(Context);
	const [description, setDescription] = useState("");
	const [altText, setAltText] = useState("");

	return (
		<Wrapper>
			<FormGroup>
				<Input
					name="description"
					onChange={(e) => setDescription(e.target.value)}
					rows="5"
				></Input>
				<Label for="description">Description</Label>
			</FormGroup>
			<Divider />
			<FormGroup>
				<Input
					name="altText"
					onChange={(e) => setAltText(e.target.value)}
					rows="3"
				></Input>
				<Label for="altText">Alternative text*</Label>
				<Description>
					*For accessibility reasons, please also provide a text describing the
					photo itself for those using a screen reader. 😊
				</Description>
			</FormGroup>
			<SubmitBtn>Upload Photo</SubmitBtn>
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

const SubmitBtn = styled.button``;

export default CaptionForm;
