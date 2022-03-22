import React from "react";
import { Seconds } from "./Seconds.jsx";

//create your first component
const Home = () => {
	let counter = 0;
	setInterval(function () {
		const four = Math.floor(counter / 1000);
		const three = Math.floor(counter / 100);
		const two = Math.floor(counter / 10);
		const one = Math.floor(counter / 1);
		console.log(four, three, two, one);
		counter++;
	}, 1000);
	return (
		<div>
			<Seconds
				digitOne={one}
				digitTwo={two}
				digitThree={three}
				digitFour={four}
			/>
		</div>
	);
};

export default Home;
