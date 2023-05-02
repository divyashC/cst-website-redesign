import React from "react";
// import { Link } from "react-router-dom";

const Announcement = ({ title, views, datePosted, description }) => {
	return (
		<div className="flex items-center justify-between px-4 py-4 my-8 bg-white rounded-md shadow-md">
			<div className="items-center justify-center flex flex-col flex-shrink-0 w-24 h-24 mr-4 bg-[#9EBACA] rounded-md">
				<div className="text-4xl font-bold text-black">
					{datePosted.split(" ")[1].slice(0, -1)}
				</div>
				<div className="text-lg text-black">
					{datePosted.split(" ")[0]} {datePosted.split(" ")[2]}
				</div>
			</div>
			<div className="flex flex-col flex-grow">
				<h3 className="text-lg font-semibold text-gray-700">{title}</h3>
				<div className="flex items-center text-sm text-gray-500">
					<i class="bi bi-eye mx-1"></i>
					<span className="mr-2">{views}</span>
					<i className="m-1 bi bi-calendar3"></i>
					<span>{datePosted}</span>
				</div>
				<p className="text-sm text-gray-600">{description}</p>
				{/* <Link
					to="/news-and-announcements"
					className="mt-2 text-sm font-medium text-blue-500 hover:text-blue-600"
				>
					Read more
				</Link> */}
			</div>
		</div>
	);
};

export default Announcement;
