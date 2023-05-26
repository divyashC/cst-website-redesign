import React from "react";
import { useLocation } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

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
			<div className="flex justify-center mt-6 mb-10">
				<div className="card card-side w-[80vw] sm:w-[400px] flex-col sm:flex-row bg-base-300 shadow-xl">
					<figure className="py-0 my-0">
						<img
							src={from.pl_profileUrl}
							className="w-[60%] h-[60%] sm:h-[60%] rounded-lg ml-5"
							alt="PL"
						/>
					</figure>

					{
						<div className="flex flex-col items-start justify-center pl-4 mb-2 sm:mb-0">
							<h2 className="card-title">{from.pl_name}</h2>
							<p>{from.prog_name}</p>
							<p>Program Leader</p>
							<div className="flex w-full mt-5 justify-evenly">
								<p className="text-xl tooltip" data-tip={from.pl_phone}>
									<BsTelephoneFill />
								</p>
								<a
									className="text-2xl tooltip"
									data-tip={from.pl_email}
									href={"mailto:" + from.pl_email}
								>
									<HiMail />
								</a>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export default Programmes;
