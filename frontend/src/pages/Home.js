import React from "react";
import HeroBg from "../assets/images/hero-temp-bg.png";
import CourseCard from "../components/CourseCard";

const courses = [
	{
		id: 1,
		title: "Masters in Construction Management",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 2,
		title: "Masters in Renewable Energy",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 3,
		title: "BE Civil Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 4,
		title: "BE Electrical Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 5,
		title: "BE Information Technology",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 6,
		title: "BE Electronics & Communications Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 7,
		title: "BE Instrumentation & Control Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 8,
		title: "BE Engineering Geology",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 9,
		title: "BE Mechanical Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 10,
		title: "BE Water Engineering",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
	},
	{
		id: 11,
		title: "Bachelors of Architecture",
		image:
			"https://raw.githubusercontent.com/divyashC/cst-website-redesign/temp/frontend/src/assets/images/temp-course-card.png?token=GHSAT0AAAAAAB52OWNXYUBXTGAO4JAYASYGZCREI7Q",
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

			<div className="flex flex-wrap gap-[40px] justify-center py-10">
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Home;
