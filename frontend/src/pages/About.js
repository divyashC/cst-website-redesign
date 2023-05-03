import React from "react";
import HeaderImg from "../assets/images/about-header.png";
import VisionImg from "../assets/images/about-vision.png";
import MissionCard from "../components/AboutPage/VisionCard";

const mission_data = [
	{
		title:
			"To generate new knowledge through research and innovation to fulfill the needs of the society",
		icon: "GiBrain",
		description:
			"To generate new knowledge research will be conducted in collaboration with the industries, stake holders and international partners. The finding will be disseminated to the wider communities through publication and seminars to address the issues and problem in the society and to help economy at the large.",
	},
	{
		title: "To provide community services to enhance GNH based society",
		icon: "HiOutlineUserGroup",
		description:
			"To promote GNH base society college will initiate and organize awareness campaign, provide technical support and social activities to improve the living standard of the communities. The college will institute centre for value education to promote community services.",
	},
	{
		title: "To collaborate with stakeholders and provide expert services",
		icon: "GiDiscussion",
		description:
			"To enhance industry-academia relations, the college will continuously develop linkages with stakeholder within and outside country. provide consultancies and training’s (including tailor made) to support industries and other organizations with technical services, and to provide expert opinions in line with the changing needs to help industries in making appropriate decisions.",
	},
	{
		title:
			"To offer internationally recognized programs in science and technology",
		icon: "GiGraduateCap",
		description:
			"The college will develop and offer program that are relevant and meets international standards, adopt best practices in teaching learning and research to ensure that the graduates are equipped for employment in international market and will have increase number of students pursuing masters in international colleges. In addition, there will be 5 to 10 percentage of international students and faculties and also international students and faculties will be invited to the college on exchange programs. The mechanism to facilitate credit transfer system will also be instituted.",
	},
];

const About = () => {
	return (
		<div className="bg-white">
			<div className="relative">
				<img src={HeaderImg} alt="Header" />
				<h1 className="absolute bottom-0 left-0 px-20 py-10 text-5xl font-bold text-white">
					About CST
				</h1>
			</div>

			<div className="container flex flex-col items-center justify-center py-16 mx-auto md:flex-row">
				<img src={VisionImg} alt="Vision" className="w-1/3 mr-20" />
				<div className="relative py-8 md:w-1/2">
					<h2 className="text-3xl font-bold text-black md:text-5xl">
						<span className="absolute -left-6 -top-8 text-[#5E89A1] text-[200px] font-serif">
							“
						</span>
						<span className="relative inline-block">Our Vision</span>
					</h2>
					<p className="my-8 text-5xl text-[#08679F] leading-normal">
						A centre of excellence in science and technology enriched with GNH
						values
					</p>
				</div>
			</div>

			<div className="relative mx-32 mt-10 mb-9 md:w-1/2">
				<h2 className="text-3xl font-bold text-black md:text-5xl">
					<span className="absolute -left-6 top-[-60px] text-[#5E89A1] text-[200px] font-serif">
						“
					</span>
					<span className="relative inline-block">Our Mission</span>
				</h2>
			</div>

			<div className="flex flex-wrap items-center justify-center gap-8 pb-20">
				{mission_data.map((item, index) => (
					<MissionCard
						key={index}
						title={item.title}
						icon={item.icon}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
};

export default About;
