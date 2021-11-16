import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

function Header() {
	return (
		<Wrapper>
      <Logo>Instablam</Logo>
      <Menu />
		</Wrapper>
	);
}

const Wrapper = styled.header`
	padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
	font-family: var(--font-secondary);
  font-size: 2.4rem;
`;

export default Header;
