import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import Button from "./Button";
import Photo from "./Photo";
import DisplayChoice from "./DisplayChoice";

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

	return (
		<>
			<DisplayChoice choiceHeader="Filter" choice={selectedFilter} />
			<Grid>
				{filters.map((filter) => (
					<PhotoWrapper
						key={filter}
						onClick={() => setSelectedFilter(filter)}
						className={filter === selectedFilter ? "active" : ""}
					>
						<Photo size={150} src={context.photo} filter={filter} />
						<FilterName>{filter}</FilterName>
					</PhotoWrapper>
				))}
			</Grid>
			<Button onClick={onBackHandler} ghost={true}>
				Go back
			</Button>
		</>
	);
}

const Grid = styled.ul`
	padding: 0;
	margin: 0.5rem 0;
	width: 100%;
	max-width: 600px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	grid-gap: 2px;
`;

const PhotoWrapper = styled.li`
	padding: 8px;
	margin: 0 auto;
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	border: 4px solid transparent;
	transition: border 0.3s;
	cursor: pointer;

	&.active {
		border: 4px solid var(--color-accent);
	}

	&:hover {
		border: 4px solid var(--color-accent);
	}

	& div {
		margin: 0;
	}
`;

const FilterName = styled.p`
	margin-top: -0.5rem;
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	position: absolute;
	top: 20px;
	left: 12px;
	right: 12px;
	background-color: hsla(0, 0%, 0%, 0.75);
	text-align: center;
	user-select: none;
	padding: 0.25rem 0;
`;

export default AddFilter;
