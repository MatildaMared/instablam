import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import GlobalStyles from "./styles/globalStyles";
import CSSVariables from "./styles/cssVariables";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<CSSVariables />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker.register("/serviceWorker.js").then(
			function (registration) {
				// Registration was successful
				console.log(
					"Service Worker registration successful! 🤩 Scope is: ",
					registration.scope
				);
			},
			function (error) {
				// Registration failed
				console.log("Service Worker registration failed 😢", error);
			}
		);
	});
}