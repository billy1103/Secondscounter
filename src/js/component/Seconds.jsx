import React from "react";

export function Seconds(props) {
	const one = Math.floor((props.seconds / 100000) % 10);
	const two = Math.floor((props.seconds / 10000) % 10);
	const three = Math.floor((props.seconds / 1000) % 10);
	const four = Math.floor((props.seconds / 100) % 10);
	const five = Math.floor((props.seconds / 10) % 10);
	const six = Math.floor((props.seconds / 1) % 10);

	return (
		<div className="big">
			<div className="div">🕘</div>
			<div className="div">{one}</div>
			<div className="div">{two}</div>
			<div className="div">{three}</div>
			<div className="div">{four}</div>
			<div className="div">{five}</div>
			<div className="div">{six}</div>
		</div>
	);
}
