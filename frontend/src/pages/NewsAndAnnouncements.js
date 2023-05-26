import React from "react";
import { FiEye } from "react-icons/fi";
import NewsImg from "../assets/images/news.png";
import NewsImg1 from "../assets/images/temp/news-img.png";
import { useLocation } from "react-router-dom";

const NewsCard = ({ imageSrc, date, title, content }) => {
	const truncatedContent =
		content && typeof content === "string" ? content.slice(0, 100) + "..." : "";

	return (
		<div className="flex flex-col border border-gray-300 rounded-md shadow-md pb-4 ml-20 mb-10 w-[80%]">
			<div
				className="h-[538px] bg-cover bg-center rounded-t-md"
				style={{ backgroundImage: `url(${imageSrc})` }}
			></div>
			<div className="text-blue-500 text-[26px] font-medium my-2 pl-3">{title}</div>
			<div className="mb-2 pl-3 text-sm text-gray-500">{date}</div>
			<div className="text-gray-600 px-4">{content}</div>
		</div>
	);
};

const RelatedNewsCard = ({ imageSrc, views, date, title, content }) => {
	const truncatedContent =
		content && typeof content === "string" ? content.slice(0, 100) + "..." : "";

	return (
		<div className="flex items-center justify-center w-full h-auto p-4 cursor-pointer bg-white hover:bg-[#D4D4D4] rounded-[20px]">
			<div className="flex-grow">
				<div className="flex items-center justify-between text-sm text-gray-500">
					<div className="font-medium text-blue">{title}</div>
					<div className="flex items-center">
						<FiEye className="mr-1" />
						{views} views
						<i className="m-1 bi bi-calendar3"></i>
						{date}
					</div>
				</div>
				<div className="text-gray-600">
					{truncatedContent}
					<span className="text-blue-500">see more</span>
				</div>
			</div>
			{/* Horizontal line */}
			<hr className="mt-4 border-gray-500" />
		</div>
	);
};

const NewsPage = () => {
	const location = useLocation();
	const { from } = location.state;

	const newsCardData = {
		imageSrc: from.imageUrl,
		date: from.date,
		title: from.title,
		content: from.description,
	};

	const relatedNewsData = [
		{
			imageSrc: "div4-image1.jpg",
			views: 1000,
			date: "May 16, 2023",
			title: "News 1",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			imageSrc: "div4-image2.jpg",
			views: 500,
			date: "May 15, 2023",
			title: "News 2",
			content: "Sed nec nulla a turpis ultricies vehicula vitae et nulla.",
		},
		{
			imageSrc: "div4-image3.jpg",
			views: 800,
			date: "May 14, 2023",
			title: "News 3",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla a turpis ultricies vehicula vitae et nulla.",
		},
	];

	const newsCardTitle = newsCardData.title;

	return (
		<div className="">
			<div className="flex flex-col space-y-8">
				{/* Hero Section */}
				<div className="relative flex justify-center items-center h-[200px] w-auto">
					<img
						src={NewsImg}
						alt="Hero Background"
						className="w-full -top-[100px] relative -z-30"
					/>
					<h1 className="absolute px-20 py-10 text-5xl font-bold text-white top-50 left-50">
						{newsCardTitle}
					</h1>
				</div>

				{/* News Content */}
				<div className="flex justify-center items-start">
					{/* Main News Card */}
					<div className="w-full lg:w-8/12">
						<NewsCard {...newsCardData} />
					</div>

					{/* Related News */}
					{/* <div className="w-full lg:w-4/12">
						{relatedNewsData.map((data, index) => (
							<div key={index}>
								<RelatedNewsCard {...data} />
								{index !== relatedNewsData.length - 1 && (
									<hr className="mt-8 border-gray-500" />
								)}
							</div>
						))}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
