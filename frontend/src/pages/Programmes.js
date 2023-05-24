import React from "react";
import { useLocation } from "react-router-dom";

const Programmes = () => {
	const location = useLocation()
  const { from } = location.state
	return (
		<div className="w-[80%] mx-auto mb-10">
			<h1 className="text-4xl font-bold text-center my-8">Programmes</h1>
			<h2	className="text-3xl font-bold text-center mb-5">{from.title}</h2>
			<p className="text-left text-xl mb-3">{from.timeDesc}</p>
			<p className="text-left text-xl mb-3">{from.desc}</p>
			<p className="text-left text-xl mb-3 font-semibold">{from.obj.title}</p>
			{from.obj.content.map((val,index)=>{
				return(
					<div key={index}>
						<p className="text-left text-lg mb-1 ml-5">{"- "+val}</p>
					</div>
				)
			})}


		</div>
	);
};

export default Programmes;
