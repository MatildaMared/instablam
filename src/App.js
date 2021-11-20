import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import NewPhotoPage from "./pages/NewPhotoPage";
import SettingsPage from "./pages/SettingsPage";
import { ContextProvider } from "./context/Context";
import "./styles/instagramFilters.css";

function App() {
	return (
		<Router>
			<ContextProvider>
				<Header />
				<ContentWrapper>
					<Routes>
						<Route exact path="/" element={<GalleryPage />} />
						<Route path="/new" element={<NewPhotoPage />} />
						<Route path="/settings" element={<SettingsPage />} />
					</Routes>
				</ContentWrapper>
			</ContextProvider>
		</Router>
	);
}

const ContentWrapper = styled.div`
	padding: 0 1rem;
	max-width: var(--max-width);
	margin: 0 auto;
`;

export default App;
