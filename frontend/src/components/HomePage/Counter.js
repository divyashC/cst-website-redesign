import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const apitoken =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const Counter = () => {
	const studentsRef = useRef(null);
	const facultyRef = useRef(null);
	const coursesRef = useRef(null);
	const yearRef = useRef(null);

	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/stats", {
				headers: { Authorization: `Bearer ${apitoken}` },
			})
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView && data.length > 0) {
			animateValue(studentsRef.current, 0, data[0].attributes.students, 1500);
			animateValue(facultyRef.current, 0, data[0].attributes.faculty, 2000);
			animateValue(coursesRef.current, 0, data[0].attributes.courses, 1200);
			animateValue(yearRef.current, 0, data[0].attributes.estd, 2000);
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
