import React, { useState, useEffect } from "react";
import axios from "axios";

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

// const data = [
// 	{
// 		question:
// 			"What is the general phone number and mailing address for the college?",
// 		answer:
// 			"The general contact details for CST college are as follows:\n\t General Phone Number: +975-17160538 (Administration)\n\t+975 – 17652414 (Academics)\n\tGeneral Email Address: info.cst@rub.edu.bt",
// 	},
// 	{
// 		question: "How do I find contact information for CST staff?",
// 		answer:
// 			"The contact information of the staff is provide in the staff directory section of the website.",
// 	},
// 	{
// 		question: "How do I get to CST?",
// 		answer:
// 			"The college is located at Rinchending in Phuentsholing, Chhukha which is in the southern region of the country. It is about 150 km from Thimphu (capital).\nIt is a border town with Jaigaon under West Bengal State of  India.",
// 	},
// 	{
// 		question: "What programmes does CST offer?",
// 		answer: "The programmes are listed clearly under programmes section.",
// 	},
// 	{
// 		question: "Is there any distance programme at CST?",
// 		answer: "No. All the programmes offered at CST are full time on-campus.",
// 	},
// 	{
// 		question: "When does the semester start?",
// 		answer:
// 			"The autumn semester usually starts at last week of July and the spring semester start in the first week of February.",
// 	},
// 	{
// 		question: "How do international students apply for admission to CST?",
// 		answer:
// 			"The international students are requested to apply to CST through DRIL Office, CST or Department of External Linkages (DRE), Office of the Vice Chancellor, Royal University of Bhutan.",
// 	},
// 	{
// 		question: "What is the infrastructure and facilities like at CST?",
// 		answer:
// 			"The CST academic zone contains facilities such as classrooms, seminar halls, conference halls, an IT center, library, faculty offices, and an auditorium.  Most of the facilities are new, with the most advanced technology desirable for teaching purposes. The recreational and residential zones currently include spacious, comfortable and convenient residences for students and staff, a gymnasium, and football, basketball and other playing fields. In the next phase, CST is also adding a substantially expanded library. There are ample open and multi-use spaces consisting of a convenience store, book-shops, and a canteen where students and faculty mingle for their meals and conversation.",
// 	},
// ];

const Connect = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:1337/api/faqs", {
					headers: {
						Authorization: `Bearer ${api_token}`,
					},
				});
				setData(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center content-center py-10">
			<h1 className="text-[1.75rem] md:text-[2.5rem] font-bold my-10">
				Frequently Asked Questions
			</h1>
			<div className="w-[90%] bg-[#EBF3F6] flex flex-col justify-center content-center p-10 rounded-md gap-4">
				{data.map((data, key) => {
					return (
						<Questions
							question={data.attributes.question}
							answer={data.attributes.answer}
						/>
					);
				})}
			</div>
		</div>
	);
};

const Questions = ({ question, answer }) => {
	return (
		<div className="w-[100%]">
			<div
				tabIndex={0}
				className="bg-white border rounded-md collapse collapse-arrow"
			>
				<div className="text-xl font-medium collapse-title">{question}</div>
				<div className="collapse-content">
					<p> {answer}</p>
				</div>
			</div>
		</div>
	);
};
export default Connect;
