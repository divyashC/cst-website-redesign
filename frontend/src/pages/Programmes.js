import React from "react";
import { useLocation } from "react-router-dom";

const Programmes = () => {
	const location = useLocation();
	const { from } = location.state;
	return (
		<div className="w-[80%] mx-auto mb-10">
			<h1 className="my-8 text-4xl font-bold text-center">Programmes</h1>
			<h2 className="mb-5 text-3xl font-bold text-center">{from.prog_name}</h2>
			<p className="mb-3 text-xl text-left">{from.duration}</p>
			<p className="mb-3 text-xl text-left">{from.prog_description}</p>
			<p className="mb-3 text-xl font-semibold text-left">
				Program Description
			</p>
			<p className="mb-1 text-lg text-left">{from.prog_description}</p>
			<p className="mb-1 text-lg text-left">
				{/* {from.prog_objectives.split(".")[0] + "."} */}
				{from.prog_objectives.split("\n")?.map((val, index) => {
					return val === "" ? <br /> : <li key={index}>{val}</li>;
				})}
			</p>
		</div>
	);
};

export default Programmes;
