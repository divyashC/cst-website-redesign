import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/HomePage/CourseCard";
import Counter from "../components/HomePage/Counter";
import Events from "../components/HomePage/EventCard";
import Announcement from "../components/HomePage/AnnouncementCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBg from "../assets/images/temp/hero-bg.png";
import TempCardImage from "../assets/images/temp/course-card.png";
import NewsTemp from "../assets/images/temp/news-card.png";

import { useEffect, useState } from "react";
import axios from "axios";

import "../assets/css/home.css";

const apitoken = `a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e`;
const courses = [
	{
		id: 1,
		title: "Masters in Construction Management",
		image: TempCardImage,
		timeDesc: "Duration: 2 years full-time", // Example time description
		desc: "The Masters in Construction Management program provides comprehensive knowledge and skills in managing construction projects, including project planning, budgeting, resource management, and risk assessment.",
		obj: {
			title: "Graduates of Masters in Construction Management will be able to:",
			content: [
				"Effectively plan, organize, and manage construction projects.",
				"Apply advanced techniques for cost estimation and budgeting.",
				"Implement sustainable construction practices.",
				"Analyze and mitigate risks in construction projects.",
				"Communicate and collaborate with project stakeholders.",
				"Understand legal and regulatory frameworks in construction management.",
				"Utilize project management software and tools.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as construction project managers, construction consultants, facility managers, or work in the construction departments of engineering firms, government agencies, or private construction companies.",
	},
	{
		id: 2,
		title: "Masters in Renewable Energy",
		image: TempCardImage,
		timeDesc:
			"Master of Engineering in Renewable Energy takes a minimum of one and a half years full time",
		desc: "The Master of Engineering in Renewable Energy aims to provide meaningful education on the design, analysis, and implementation of renewable energy systems and energy management. It will enhance the technical and analytical competence of engineers who are working or intend to work in renewable energy and associated fields.",
		obj: {
			title:
				"Master of Engineering in Renewable Energy graduates will be able to:",
			content: [
				"Communicate information in a clear and structured way in both oral and written forms.",
				"Analyse and evaluate environmental, social, and economic impacts of renewable energy infrastructure.",
				"Evaluate constraints and commercial risks related to renewable energy.",
				"Initiate, plan and design new renewable energy infrastructure.",
				"Evaluate and optimise renewable energy systems using modelling techniques.",
				"Assess the range of problems related to renewable energy and apply new emerging technologies to solve these complex problems.",
				"Identify areas of unexplored questions and recognize different approaches to problems.",
				"Enhance innovation and entrepreneurship in renewable energy.",
				"Demonstrate a critical awareness of theoretical design concepts and their practical implementation within the renewable energy system.",
				"Use appropriate software packages and IT skills for modelling and simulation of renewable energy systems.",
				"Integrate knowledge and research skills to address a research question and continue toward a research career.",
				"Advise clients on renewable energy projects.",
			],
		},
		careerOptions:
			"The graduates of the programme will be able to serve as project engineers, energy and climate experts, energy engineers, energy designers, energy analysts, energy managers, energy policy analysts, energy system maintenance engineers, and researchers. They would be ideal candidates for organizations that emphasize energy system design or application, solar photovoltaic, solar thermal technology, hydropower, biomass energy, biofuels, wind energy systems, and emerging technologies. Graduates can also work as private consultants, entrepreneurs, innovators, and strategists. The demand for graduates of this programme will grow in the coming years as the country's renewable energy initiatives expand.",
	},
	{
		id: 3,
		title: "BE Civil Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time", // Example time description
		desc: "The BE Civil Engineering program focuses on providing students with a strong foundation in civil engineering principles and practices. It covers various areas such as structural engineering, geotechnical engineering, transportation engineering, and environmental engineering.",
		obj: {
			title: "Graduates of BE Civil Engineering will be able to:",
			content: [
				"Design and analyze structures such as buildings, bridges, and dams.",
				"Plan and manage construction projects.",
				"Conduct geotechnical investigations and analyze soil behavior.",
				"Design transportation systems and manage traffic flow.",
				"Assess and mitigate environmental impacts of civil engineering projects.",
				"Utilize computer-aided design (CAD) and engineering software.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as civil engineers, structural engineers, transportation engineers, geotechnical engineers, environmental engineers, construction project managers, or work in government agencies, consulting firms, or construction companies.",
	},
	{
		id: 4,
		title: "BE Electrical Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Electrical Engineering program provides students with a comprehensive understanding of electrical systems and technologies. It covers areas such as power generation, transmission, and distribution, control systems, electronics, and telecommunications.",
		obj: {
			title: "Graduates of BE Electrical Engineering will be able to:",
			content: [
				"Design and analyze electrical circuits and systems.",
				"Understand and apply principles of power generation, transmission, and distribution.",
				"Design and control electrical machines and systems.",
				"Develop and implement control systems for various applications.",
				"Design and analyze electronic circuits and devices.",
				"Understand and apply principles of telecommunications systems.",
				"Utilize software tools for electrical and electronic design and simulation.",
				"Work effectively in interdisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as electrical engineers, power system engineers, control system engineers, electronics engineers, telecommunications engineers, or work in industries such as power generation, telecommunications, electronics, automation, and renewable energy.",
	},
	{
		id: 5,
		title: "BE Information Technology",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Information Technology program focuses on providing students with a strong foundation in computer science and information technology. It covers areas such as programming, software development, databases, networking, cybersecurity, and data science.",
		obj: {
			title: "Graduates of BE Information Technology will be able to:",
			content: [
				"Develop software applications using programming languages and frameworks.",
				"Design and implement databases for storing and retrieving data.",
				"Configure and manage computer networks and systems.",
				"Implement cybersecurity measures to protect data and systems.",
				"Analyze and interpret data using data science techniques.",
				"Collaborate effectively in multidisciplinary IT projects.",
				"Stay updated with emerging technologies and trends in the IT industry.",
				"Adhere to ethical and professional standards in IT practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as software developers, web developers, database administrators, network administrators, cybersecurity analysts, data analysts, IT consultants, or work in various industries such as software development, IT consulting, telecommunications, finance, healthcare, and e-commerce.",
	},
	{
		id: 6,
		title: "BE Electronics & Communications Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Electronics & Communications Engineering program focuses on providing students with a strong foundation in electronics and communication systems. It covers areas such as electronic circuits, digital systems, signal processing, telecommunications, and wireless communication.",
		obj: {
			title:
				"Graduates of BE Electronics & Communications Engineering will be able to:",
			content: [
				"Design and analyze electronic circuits and systems.",
				"Develop and implement digital systems and microcontrollers.",
				"Process and analyze signals for various applications.",
				"Design and implement telecommunications systems.",
				"Understand and apply principles of wireless communication.",
				"Utilize software tools for electronics and communication design and simulation.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as electronics engineers, communications engineers, telecommunications engineers, embedded systems engineers, or work in industries such as telecommunications, consumer electronics, automotive electronics, aerospace, and defense.",
	},
	{
		id: 7,
		title: "BE Instrumentation & Control Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Instrumentation & Control Engineering program focuses on providing students with a strong foundation in instrumentation and control systems. It covers areas such as sensors, measurement techniques, control systems, industrial automation, and process control.",
		obj: {
			title:
				"Graduates of BE Instrumentation & Control Engineering will be able to:",
			content: [
				"Design and select appropriate instrumentation systems for measuring physical quantities.",
				"Implement control systems for various applications.",
				"Understand and apply principles of industrial automation.",
				"Develop and analyze process control systems.",
				"Utilize software tools for instrumentation and control system design and simulation.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as instrumentation engineers, control system engineers, automation engineers, process control engineers, or work in industries such as manufacturing, oil and gas, power generation, chemical processing, and pharmaceuticals.",
	},
	{
		id: 8,
		title: "BE Engineering Geology",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Engineering Geology program focuses on providing students with a strong foundation in geology and its application to engineering projects. It covers areas such as geological mapping, site investigation, rock mechanics, soil mechanics, and geological hazards.",
		obj: {
			title: "Graduates of BE Engineering Geology will be able to:",
			content: [
				"Conduct geological mapping and site investigation for engineering projects.",
				"Analyze and interpret geological data for engineering purposes.",
				"Assess and manage geological hazards such as landslides and earthquakes.",
				"Understand and apply principles of rock mechanics and soil mechanics.",
				"Provide geological input for engineering design and construction.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as engineering geologists, geological consultants, geotechnical engineers, environmental engineers, or work in industries such as civil engineering, mining, geotechnical consulting, environmental consulting, and geological surveying.",
	},
	{
		id: 9,
		title: "BE Mechanical Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Mechanical Engineering program focuses on providing students with a strong foundation in mechanical engineering principles and practices. It covers areas such as thermodynamics, fluid mechanics, solid mechanics, materials science, and manufacturing processes.",
		obj: {
			title: "Graduates of BE Mechanical Engineering will be able to:",
			content: [
				"Design and analyze mechanical systems and components.",
				"Understand and apply principles of thermodynamics and heat transfer.",
				"Analyze and design fluid flow systems.",
				"Analyze and design solid mechanics systems.",
				"Understand and apply principles of materials science and engineering.",
				"Utilize software tools for mechanical design and simulation.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as mechanical engineers, design engineers, manufacturing engineers, automotive engineers, aerospace engineers, or work in industries such as automotive, aerospace, energy, manufacturing, consulting, and research and development.",
	},
	{
		id: 10,
		title: "BE Water Engineering",
		image: TempCardImage,
		timeDesc: "Duration: 4 years full-time",
		desc: "The BE Water Engineering program focuses on providing students with a strong foundation in water resources engineering, hydraulic engineering, and environmental engineering. It covers areas such as water supply systems, wastewater treatment, river engineering, and water quality management.",
		obj: {
			title: "Graduates of BE Water Engineering will be able to:",
			content: [
				"Design and analyze water supply and wastewater systems.",
				"Assess and manage water resources and river systems.",
				"Design and implement water treatment and wastewater treatment processes.",
				"Analyze and model water quality parameters.",
				"Understand and apply principles of hydraulic engineering.",
				"Utilize software tools for water engineering design and simulation.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in engineering practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as water resources engineers, hydraulic engineers, environmental engineers, water treatment engineers, wastewater engineers, or work in industries such as water supply and sanitation, environmental consulting, government agencies, research institutions, and non-profit organizations.",
	},
	{
		id: 11,
		title: "Bachelors of Architecture",
		image: TempCardImage,
		timeDesc: "Duration: 5 years full-time",
		desc: "The Bachelors of Architecture program focuses on providing students with a comprehensive education in architectural design, theory, and practice. It covers areas such as architectural design principles, building construction, architectural history, urban planning, and sustainable design.",
		obj: {
			title: "Graduates of Bachelors of Architecture will be able to:",
			content: [
				"Create innovative and functional architectural designs.",
				"Understand and apply principles of architectural theory and history.",
				"Integrate sustainable design principles into architectural projects.",
				"Develop technical skills in building construction and materials.",
				"Collaborate with clients, engineers, and other stakeholders in architectural projects.",
				"Utilize computer-aided design (CAD) and architectural visualization tools.",
				"Work effectively in multidisciplinary teams.",
				"Adhere to ethical and professional standards in architectural practice.",
			],
		},
		careerOptions:
			"Graduates can pursue careers as architects, architectural designers, urban planners, interior designers, or work in architectural firms, construction companies, real estate development firms, government agencies, or as independent consultants.",
	},
];

// const UpdateViewCount = async (announcementId) => {
// 	const [fetchedAnnouncements, setFetchedAnnouncements] = useState([]);

// 	try {
// 		const response = await axios.patch(
// 			`http://localhost:1337/api/news-and-announcements/${announcementId}`,
// 			{
// 				data: {
// 					views:
// 						fetchedAnnouncements.find(
// 							(announcement) => announcement.id === announcementId
// 						).attributes.views + 1,
// 				},
// 			},
// 			{
// 				headers: {
// 					Authorization: `Bearer ${apitoken}`,
// 				},
// 			}
// 		);

// 		// Update the state with the updated announcement data
// 		const updatedAnnouncement = response.data.data;
// 		const updatedAnnouncements = fetchedAnnouncements.map((announcement) => {
// 			if (announcement.id === updatedAnnouncement.id) {
// 				return updatedAnnouncement;
// 			}
// 			return announcement;
// 		});
// 		setFetchedAnnouncements(updatedAnnouncements);
// 	} catch (error) {
// 		console.error("Error updating view count:", error);
// 	}
// };

const Home = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [fetchedNewsAndAnnouncements, setFetchedNewsAndAnnouncements] =
		useState([]);
	const [sortedAnnouncements, setSortedAnnouncements] = useState([]);
	const [sortedEvents, setSortedEvents] = useState([]);
	const [programmes, setProgrammes] = useState([]);

	useEffect(() => {
		const fetchNewsAndAnnouncements = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/news-and-announcements",
					{
						headers: {
							Authorization: `Bearer ${apitoken}`,
						},
					}
				);
				const { data } = response.data;

				// Sort the announcements and events by date in descending order
				const announcements = data.filter(
					(item) => item.attributes.type === "announcements"
				);
				const events = data.filter((item) => item.attributes.type === "events");

				const sortedAnnouncements = announcements.sort(
					(a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
				);
				const sortedEvents = events.sort(
					(a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
				);

				setFetchedNewsAndAnnouncements(data);
				setSortedAnnouncements(sortedAnnouncements);
				setSortedEvents(sortedEvents);
			} catch (error) {
				console.error("Error fetching news and announcements:", error);
			}
		};

		fetchNewsAndAnnouncements();
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/programmes", {
				headers: { Authorization: `Bearer ${apitoken}` },
			})
			.then((response) => {
				setProgrammes(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="">
			<img
				src={HeroBg}
				alt="Hero Background"
				className="w-full -top-[100px] relative -z-30"
			/>
			<div id="Programmes" className="mt-28">
				<h1 className="text-xl italic font-bold text-center text-[#1d83bd]">
					Our College Curriculum
				</h1>
				<h1 className="mt-2 text-4xl text-center text-black">
					Explore our courses
				</h1>
			</div>

			<div className=" my-[100px] mx-10">
				<Slider {...settings}>
					{/* {courses.map((course) => (
						<Link
							to="/programmes"
							state={{
								from: course,
							}}
							key={course.id}
						>
							<CourseCard key={course.id} course={course} />
						</Link>
					))} */}

					{programmes &&
						programmes.map((programme) => {
							return (
								<Link
									to="/programmes"
									state={{
										from: programme.attributes,
									}}
									key={programme.id}
								>
									<CourseCard
										key={programme.id}
										title={programme.attributes.prog_name}
										image={TempCardImage}
									/>
								</Link>
							);
						})}
				</Slider>
				<style>
					{`
        .slick-prev:before, .slick-next:before {
          color: black;
		  font-size: 40px;
        }
      `}
				</style>
			</div>

			<Counter />

			<div className="px-4 py-12 mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row">
					<div>
						<h1 className="mb-2 text-3xl font-bold text-black">
							Announcements
						</h1>
						{sortedAnnouncements.map((announcement) => (
							<Link
								to="/news-and-announcements"
								state={{ from: announcement.attributes }}
							>
								<React.Fragment key={announcement.id}>
									<Announcement
										title={announcement.attributes.title}
										views={announcement.attributes.views}
										datePosted={announcement.attributes.date}
										description={
											announcement.attributes.description
												.split(" ")
												.slice(0, 20)
												.join(" ") + "..."
										}
									/>
								</React.Fragment>
							</Link>
						))}
					</div>
					<hr className="h-auto mx-6 my-10 border-l-2 border-gray-300" />
					{/* <div>
						<h1 className="mb-2 text-3xl font-bold text-black">Events</h1>
						{events.map((event, index) => (
							<React.Fragment key={index}>
								<Events {...event} />
								{index !== events.length - 1}
							</React.Fragment>
						))}
					</div> */}
					<div>
						<h1 className="mb-2 text-3xl font-bold text-black">Events</h1>
						{sortedEvents &&
							sortedEvents.map((event) => (
								<Link
									to="/news-and-announcements"
									state={{ from: event.attributes }}
								>
									<React.Fragment key={event.id}>
										<Events
											title={event.attributes.title}
											views={event.attributes.views}
											date={event.attributes.date}
											description={
												event.attributes.description
													.split(" ")
													.slice(0, 20)
													.join(" ") + "..."
											}
											imageUrl={NewsTemp}
										/>
									</React.Fragment>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
