import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client"; // react 18
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root")); //react 18
const root = document.getElementById("root");

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	root
);
