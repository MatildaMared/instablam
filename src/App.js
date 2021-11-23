import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage";
import NewPhotoPage from "./pages/NewPhotoPage";
import SettingsPage from "./pages/SettingsPage";
import { ContextProvider } from "./context/Context";
import "./styles/instagramFilters.css";

function App() {
	return (
		<Router>
			<ContextProvider>
				<Wrapper>
					<Header />
					<ContentWrapper>
						<Routes>
							<Route exact path="/" element={<GalleryPage />} />
							<Route path="/new" element={<NewPhotoPage />} />
							<Route path="/settings" element={<SettingsPage />} />
						</Routes>
					</ContentWrapper>
					<Footer />
				</Wrapper>
			</ContextProvider>
		</Router>
	);
}

const ContentWrapper = styled.div`
	padding: 0 1rem;
	max-width: var(--max-width);
	margin: 0 auto;
	height: 100%;
`;

const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

export default App;
