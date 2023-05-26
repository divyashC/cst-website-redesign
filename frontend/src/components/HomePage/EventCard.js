import React from "react";
import { AiFillEye, AiFillCalendar } from "react-icons/ai";

const Event = ({ title, views, date, description, imageUrl }) => {
	return (
		<div className="flex items-center justify-between px-4 py-4 my-8 bg-white rounded-md shadow-md">
			<div className="flex-shrink-0 w-24 h-24 mr-4">
				<img
					src={imageUrl}
					alt={title}
					className="object-cover w-full h-full rounded-md"
				/>
			</div>
			<div className="flex flex-col flex-grow">
				<h3 className="text-lg font-semibold text-gray-700">{title}</h3>
				<div className="flex items-center text-sm text-gray-500">
					<AiFillEye className="mx-1" />
					<span className="mr-2">{views}</span>
					<AiFillCalendar className="mx-1" />
					<span>{date}</span>
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

export default Event;
