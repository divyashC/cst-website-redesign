import HeaderImg from "../assets/images/about-header.png";
import VisionImg from "../assets/images/about-vision.png";
import MissionCard from "../components/AboutPage/MissionCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const SocialLinks = () => {
	return (
		<div className="flex justify-center gap-6 my-16">
			<a
				href="https://www.facebook.com/CST.University/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 hover:text-blue-700"
			>
				<FaFacebook size={60} />
			</a>
			<a
				href="https://www.instagram.com/cst_rub/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-pink-500 hover:text-pink-700"
			>
				<FaInstagram size={60} />
			</a>
			<a
				href="https://www.youtube.com/@CSTMultimedia"
				target="_blank"
				rel="noopener noreferrer"
				className="text-red-500 hover:text-red-700"
			>
				<FaYoutube size={60} />
			</a>
		</div>
	);
};

const YoutubeVideo = ({ title, embedId }) => {
	return (
		<div className="max-w-xl mx-auto my-10">
			<iframe
				width="100%"
				height="315"
				src={`https://www.youtube.com/embed/${embedId}`}
				title={title}
				// frameBorder="0"
				// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<p className="mt-4 text-lg font-bold text-center text-blue-800">
				{title}
			</p>
		</div>
	);
};

const About = () => {
	const [missionData, setMissionData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/about-missions",
					{
						headers: {
							Authorization: `Bearer ${api_token}`,
						},
					}
				);
				setMissionData(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="">
			<div className="relative flex justify-center items-center h-[250px] w-auto">
				<img
					src={HeaderImg}
					alt="Hero Background"
					className="w-full -top-[100px] relative -z-30"
				/>
				<h1 className="absolute bottom-0 left-0 px-6 py-3 text-2xl font-bold text-white md:px-20 md:py-10 md:text-5xl">
					About CST
				</h1>
			</div>

			<div className="flex flex-col items-center justify-center py-8 mx-auto md:flex-row">
				<img
					src={VisionImg}
					alt="Vision"
					className="w-1/2 md:mr-10 lg:mr-10 md:w-1/3 lg:w-1/4"
				/>
				<div className="relative py-4 md:w-1/2">
					<h2 className="text-2xl font-bold text-center text-black md:text-left md:text-5xl">
						<span className="absolute -left-3 -top-2 text-[#5E89A1] text-[100px] font-serif hidden sm:inline-block">
							“
						</span>
						<span className="relative inline-block">Our Vision</span>
					</h2>

					<p className="my-4 text-xl text-[#08679F] leading-[2rem] px-10 lg:text-5xl lg:leading-[4rem] md:text-3xl md:leading-[2.5rem]">
						A centre of excellence in science and technology enriched with GNH
						values
					</p>
				</div>
			</div>

			<div className="relative mx-24 my-6 md:w-1/2">
				<h2 className="text-2xl font-bold text-center text-black md:text-left md:text-5xl lg:ml-28">
					<span className="absolute lg:left-24 top-[-25px] text-[#5E89A1] text-[100px] font-serif hidden sm:inline-block md:-left-5">
						“
					</span>
					<span className="relative inline-block">Our Mission</span>
				</h2>
			</div>

			<div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-10 lg:items-stretch lg:justify-center lg:gap-10 lg:flex-row md:flex-row">
				{missionData.map((item) => (
					<MissionCard
						key={item.id}
						title={item.attributes.title}
						icon={item.attributes.icon}
						description={item.attributes.description}
					/>
				))}
			</div>

			<div className="bg-white w-[100vw] ">
				{/* Social Links */}
				<SocialLinks />

				{/* YouTube Videos */}
				<div className="max-w-3xl w-[100vw] lg:mx-0 mx-auto  mt-12">
					<YoutubeVideo
						title="Promotional Video | College of Science and Technology | Royal University of Bhutan | 2021"
						embedId="fc09mcvQlQ0"
					/>
					<YoutubeVideo
						title="Architectural Thesis Trailer 2022 l College of Science & Technology"
						embedId="fZx1XUTw4sc"
					/>
					<YoutubeVideo
						title="Youth For Climate Change | UNDP Bhutan | CST"
						embedId="YebdZoR_au0"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
