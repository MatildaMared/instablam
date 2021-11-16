import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import GalleryPage from "./pages/GalleryPage";
import PhotoPage from "./pages/PhotoPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<Router>
			<Header />
			<ContentWrapper>
				<Routes>
					<Route exact path="/" element={<GalleryPage />} />
					<Route path="/photo" element={<PhotoPage />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Routes>
			</ContentWrapper>
		</Router>
	);
}

const ContentWrapper = styled.div`
  padding: 0 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
