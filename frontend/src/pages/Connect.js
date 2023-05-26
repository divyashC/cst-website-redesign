import React, { useState, useEffect } from "react";
import axios from "axios";

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

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
