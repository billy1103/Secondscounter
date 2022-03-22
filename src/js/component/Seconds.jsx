import React from "react";

export function Seconds(props) {
	return (
		<div className="container d-flex justify-content-center p-5 ">
			<p className="Clock"></p>
			<p className="border border-dark p-3">{four % 10}</p>
			<p className="border border-dark p-3">{three % 10}</p>
			<p className="border border-dark p-3">{two % 10}</p>
			<p className="border border-dark p-3">{one % 10}</p>
		</div>
	);
}
