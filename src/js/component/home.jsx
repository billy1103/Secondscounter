import React from "react";
import { Seconds } from "./Seconds.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Seconds seconds={1234} />
		</div>
	);
};

export default Home;
