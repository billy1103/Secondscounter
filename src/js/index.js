//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Seconds } from "./component/Seconds.jsx";

//render your react application

const start = Date.now();

setInterval(() => {
	const seconds = Math.floor((Date.now() - start) / 1000);
	ReactDOM.render(
		<Seconds seconds={seconds} />,
		document.querySelector("#app")
	);
});
