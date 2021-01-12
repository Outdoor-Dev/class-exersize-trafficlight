import React, { useState } from "react";

//include images into your bundle

//create your first component
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="rectangle">
				<div
					className={color === "red" ? "red-selected" : "red-light"}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow" ? "yellow-selected" : "yellow-light"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green" ? "green-selected" : "green-light"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</>
	);
};
