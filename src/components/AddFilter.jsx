import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import Button from "./Button";
import Photo from "./Photo";

function AddFilter({ currentStep, setCurrentStep }) {
	const [context, setContext] = useContext(Context);
	const [selectedFilter, setSelectedFilter] = useState("");
	const filters = [
		"clarendon",
		"crema",
		"dogpatch",
		"earlybird",
		"gingham",
		"ginza",
		"hefe",
		"helena",
		"hudson",
		"inkwell",
		"kelvin",
		"juno",
		"lark",
		"lofi",
		"ludwig",
		"maven",
		"mayfair",
		"moon",
		"nashville",
		"perpetua",
		"poprocket",
		"reyes",
		"rise",
		"sierra",
		"skyline",
		"slumber",
		"stinson",
		"sutro",
		"toaster",
		"valencia",
		"walden",
		"vesper",
		"willow",
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
	margin: 0.5rem 0;
	width: 100%;
	max-width: 600px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
