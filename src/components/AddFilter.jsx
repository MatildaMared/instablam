import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import Button from "./Button";
import Photo from "./Photo";
import DisplayChoice from "./DisplayChoice";
import Divider from "./Divider";

function AddFilter({ currentStep, setCurrentStep }) {
	const [context, setContext] = useContext(Context);
	const [selectedFilter, setSelectedFilter] = useState("none");
	const filters = [
		"none",
		"clarendon",
		"crema",
		"hefe",
		"moon",
		"perpetua",
		"poprocket",
		"reyes",
		"skyline",
		"valencia",
		"walden",
		"xpro-ii",
	];

	const onBackHandler = () => {
		setContext({
			location: null,
		});
		setCurrentStep(currentStep - 1);
	};

	const onConfirmHandler = () => {
		setContext({
			filter: selectedFilter,
		});
		setCurrentStep(currentStep + 1);
	};

	return (
		<>
			<Grid>
				{filters.map((filter) => (
					<PhotoWrapper key={filter}>
						<FilterBtn
							className={filter === selectedFilter ? "active" : ""}
							onClick={() => setSelectedFilter(filter)}
							aria-label={`Photo-filter ${filter}`}
						>
							<Photo size={150} src={context.photo} filter={filter} />
							<FilterName>{filter}</FilterName>
						</FilterBtn>
					</PhotoWrapper>
				))}
			</Grid>
			<DisplayChoice
				choiceHeader="Filter"
				choice={
					selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)
				}
			/>
			<Button onClick={onConfirmHandler}>Next</Button>
			<Divider />
			<Button onClick={onBackHandler} ghost={true}>
				Go back
			</Button>
		</>
	);
}

const Grid = styled.ul`
	padding: 0 1rem;
	margin: 0.5rem 1rem;
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
`;

const PhotoWrapper = styled.li``;

const FilterBtn = styled.button`
	border: none;
	padding: 0;
	background-color: transparent;
	color: var(--color-white);
	margin: 0 auto;
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	outline-offset: 6px;

	&.active {
		outline: 4px solid var(--color-accent);
	}

	&:hover,
	&:focus {
		outline: var(--outline);
		outline-width: 4px;
	}

	& div {
		margin: 0;
	}
`;

const FilterName = styled.p`
	margin-top: -16px;
	font-size: 0.8rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	position: absolute;
	top: 20px;
	left: 4px;
	right: 4px;
	background-color: hsla(0, 0%, 0%, 0.75);
	text-align: center;
	user-select: none;
	padding: 0.25rem 0;
`;

export default AddFilter;
