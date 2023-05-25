import React from "react";

const CourseCard = ({ title, image }) => {
	return (
		<div className="flex items-center justify-center ">
			<div className="w-64 overflow-hidden bg-white rounded-lg shadow-md">
				<img src={image} alt={title} className="object-cover w-full h-40" />
				<div className="p-4">
					<h2 className="mb-2 text-lg font-bold text-black">{title}</h2>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
