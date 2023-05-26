import React from "react";
import { AiFillEye, AiFillCalendar } from "react-icons/ai";
// import { Link } from "react-router-dom";

const getMonth = (month) => {
	if (month === "01" || month === "1") {
		return "JAN";
	} else if (month === "02" || month === "2") {
		return "FEB";
	} else if (month === "03" || month === "3") {
		return "MAR";
	} else if (month === "04" || month === "4") {
		return "APR";
	} else if (month === "05" || month === "5") {
		return "MAY";
	} else if (month === "06" || month === "6") {
		return "JUN";
	} else if (month === "07" || month === "7") {
		return "JUL";
	} else if (month === "08" || month === "8") {
		return "AUG";
	} else if (month === "09" || month === "9") {
		return "SEPT";
	} else if (month === "10") {
		return "OCT";
	} else if (month === "11") {
		return "NOV";
	} else if (month === "12") {
		return "DEC";
	}
};

const Announcement = ({ title, views, datePosted, description }) => {
	return (
		<div className="flex items-center justify-between px-4 py-4 my-8 bg-white rounded-md shadow-md">
			<div className="items-center justify-center flex flex-col flex-shrink-0 w-24 h-24 mr-4 bg-[#9EBACA] rounded-md">
				<div className="text-4xl font-bold text-black">
					{datePosted.split("-")[2]}
				</div>
				<div className="text-lg text-black">
					{getMonth(datePosted.split("-")[1])}
				</div>
			</div>
			<div className="flex flex-col flex-grow">
				<h3 className="text-lg font-semibold text-gray-700">{title}</h3>
				<div className="flex items-center text-sm text-gray-500">
					<AiFillEye className="mx-1" />
					<span className="mr-2">{views}</span>
					<AiFillCalendar className="mx-1" />
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
