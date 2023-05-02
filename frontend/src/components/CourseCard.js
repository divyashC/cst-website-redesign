import React from "react";

const CourseCard = ({ course }) => {
	return (
		<div className="w-64 overflow-hidden bg-white rounded-lg shadow-md">
			<img
				src={course.image}
				alt={course.title}
				className="object-cover w-full h-40"
			/>
			<div className="p-4">
				<h2 className="mb-2 text-lg font-bold text-black">{course.title}</h2>
			</div>
		</div>
	);
};

export default CourseCard;
