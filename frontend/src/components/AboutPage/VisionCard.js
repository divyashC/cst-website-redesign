import React from "react";
import PropTypes from "prop-types";
import { GiGraduateCap, GiBrain, GiDiscussion } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";

const Card = ({ title, icon, description }) => {
	const icons = {
		GiGraduateCap: <GiGraduateCap className="text-gray-800 text-7xl" />,
		GiBrain: <GiBrain className="text-gray-800 text-7xl" />,
		GiDiscussion: <GiDiscussion className="text-gray-800 text-7xl" />,
		HiOutlineUserGroup: (
			<HiOutlineUserGroup className="text-gray-800 text-7xl" />
		),
	};

	return (
		<div className="w-1/3">
			<div className="w-full bg-white rounded-lg shadow-md aspect-w-1 aspect-h-1">
				<div className="flex p-4">
					<h2 className="flex-grow font-bold text-black">{title}</h2>
					<div className="pl-10 pr-5">{icons[icon]}</div>
				</div>
				<div className="p-4 text-gray-600">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.oneOf([
		"GiGraduateCap",
		"GiBrain",
		"GiDiscussion",
		"HiOutlineUserGroup",
	]).isRequired,
	description: PropTypes.string.isRequired,
};

export default Card;
