import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
	const studentsRef = useRef(null);
	const facultyRef = useRef(null);
	const coursesRef = useRef(null);
	const yearRef = useRef(null);

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			animateValue(studentsRef.current, 0, 1001, 1500);
			animateValue(facultyRef.current, 0, 101, 2000);
			animateValue(coursesRef.current, 0, 11, 1200);
			animateValue(yearRef.current, 0, 2000, 2000);
		}
	}, [inView]);

	const animateValue = (element, start, end, duration) => {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const value = Math.floor(progress * (end - start) + start);
			element.innerHTML = value;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};

	return (
		<div
			ref={ref}
			className="flex items-center justify-around py-8 text-white bg-[#08679F]"
		>
			<div className="flex flex-col items-center justify-center">
				<div
					ref={studentsRef}
					className="text-4xl font-bold text-white counter"
				>
					0
				</div>
				<div className="text-lg">Students</div>
			</div>
			<hr className="h-24 mx-6 border-l border-white" />
			<div className="flex flex-col items-center justify-center">
				<div ref={facultyRef} className="text-4xl font-bold text-white counter">
					0
				</div>
				<div className="text-lg">Faculty</div>
			</div>
			<hr className="h-24 mx-6 border-l border-white" />
			<div className="flex flex-col items-center justify-center">
				<div ref={coursesRef} className="text-4xl font-bold text-white counter">
					0
				</div>
				<div className="text-lg">Courses</div>
			</div>
			<hr className="h-24 mx-6 border-l border-white" />
			<div className="flex flex-col items-center justify-center">
				<div ref={yearRef} className="text-4xl font-bold text-white counter">
					0
				</div>
				<div className="text-lg">Estd. Year</div>
			</div>
		</div>
	);
};

export default Counter;
