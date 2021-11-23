import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

function Header() {
	return (
		<Wrapper>
			<Content>
				<Logo>Instablam</Logo>
				<Menu />
			</Content>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	padding: 0.5rem 1rem;
	border-bottom: 1px solid hsla(0, 0%, 20%, 1);
	background-color: hsla(0, 0%, 10%, 10);
`;

const Content = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.h1`
	user-select: none;
	font-family: var(--font-secondary);
	font-size: 2.4rem;
	background-color: rgb(254, 218, 119);
	background-image: var(--gradient);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

export default Header;
