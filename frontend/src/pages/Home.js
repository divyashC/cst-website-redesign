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
			<div id="Programmes">
				<h1 className="text-xl italic font-bold text-center text-[#1d83bd]">
					Our College Curriculum
				</h1>
				<h1 className="mt-2 text-4xl text-center text-black">
					Explore our courses
				</h1>
			</div>

			<div className=" my-[100px] mx-10">
				<Slider {...settings}>
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
										image={programme.attributes.card_imgUrl}
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
											imageUrl={event.attributes.imageUrl}
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
