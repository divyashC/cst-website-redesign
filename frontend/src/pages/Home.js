import React from "react";

import CourseCard from "../components/HomePage/CourseCard";
import Counter from "../components/HomePage/Counter";
import Events from "../components/HomePage/EventCard";
import Announcement from "../components/HomePage/AnnouncementCard";

import HeroBg from "../assets/images/temp/hero-bg.png";
import TempCardImage from "../assets/images/temp/course-card.png";
import NewsTemp from "../assets/images/temp/news-card.png";

const courses = [
	{
		id: 1,
		title: "Masters in Construction Management",
		image: TempCardImage,
	},
	{
		id: 2,
		title: "Masters in Renewable Energy",
		image: TempCardImage,
	},
	{
		id: 3,
		title: "BE Civil Engineering",
		image: TempCardImage,
	},
	{
		id: 4,
		title: "BE Electrical Engineering",
		image: TempCardImage,
	},
	{
		id: 5,
		title: "BE Information Technology",
		image: TempCardImage,
	},
	{
		id: 6,
		title: "BE Electronics & Communications Engineering",
		image: TempCardImage,
	},
	{
		id: 7,
		title: "BE Instrumentation & Control Engineering",
		image: TempCardImage,
	},
	{
		id: 8,
		title: "BE Engineering Geology",
		image: TempCardImage,
	},
	{
		id: 9,
		title: "BE Mechanical Engineering",
		image: TempCardImage,
	},
	{
		id: 10,
		title: "BE Water Engineering",
		image: TempCardImage,
	},
	{
		id: 11,
		title: "Bachelors of Architecture",
		image: TempCardImage,
	},
];

const announcements = [
	{
		views: 135,
		datePosted: "May 1, 2023",
		title: "New Features Coming Soon!",
		description:
			"We're excited to announce that we're working on some new features that we think you're going to love. Stay tuned for more information!",
	},
	{
		views: 68,
		datePosted: "April 27, 2023",
		title: "Office Closure on May 3rd",
		description:
			"Our office will be closed on May 3rd due to a company event. We apologize for any inconvenience this may cause.",
	},
	{
		views: 205,
		datePosted: "April 21, 2023",
		title: "Company Culture Survey Results",
		description:
			"We're happy to share the results of our recent company culture survey. Thank you to everyone who participated!",
	},
];

const events = [
	{
		imageUrl: NewsTemp,
		title: "Upcoming Webinar: Tailwind CSS",
		views: 327,
		date: "May 15, 2023",
		description:
			"Join us for a free webinar on May 15th to learn the basics of Tailwind CSS.",
	},
	{
		imageUrl: NewsTemp,
		title: "React Summit 2023",
		views: 502,
		date: "June 10-12, 2023",
		description:
			"The React Summit is back and better than ever! Join us in San Francisco from June 10-12.",
	},
	{
		imageUrl: NewsTemp,
		title: "Frontend Development Bootcamp",
		views: 143,
		date: "July 1-31, 2023",
		description:
			"Our intensive Frontend Development Bootcamp will teach you everything you need to know to build modern web applications.",
	},
];

const Home = () => {
	return (
		<div className="bg-white">
			<img src={HeroBg} alt="Hero Background" className="w-full" />

			<div className="mt-4">
				<h1 className="text-xl italic font-bold text-center text-[#1d83bd]">
					Our College Curriculum
				</h1>
				<h1 className="mt-2 text-4xl text-center text-black">
					Explore our courses
				</h1>
			</div>

			<div className="flex flex-wrap gap-[40px] justify-center my-10">
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>

			<Counter />

			<div className="px-4 py-12 mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex">
					<div>
						<h1 className="mb-2 text-3xl font-bold text-black">
							Announcements
						</h1>
						{announcements.map((announcement, index) => (
							<React.Fragment key={index}>
								<Announcement {...announcement} />
								{index !== announcements.length - 1}
							</React.Fragment>
						))}
					</div>
					<hr className="h-auto mx-6 my-10 border-l-2 border-gray-300" />
					<div>
						<h1 className="mb-2 text-3xl font-bold text-black">Events</h1>
						{events.map((event, index) => (
							<React.Fragment key={index}>
								<Events {...event} />
								{index !== events.length - 1}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
