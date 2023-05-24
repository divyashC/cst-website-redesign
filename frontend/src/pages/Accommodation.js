import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderImg from "../assets/images/hostel-header.png";
import SideImg from "../assets/images/temp/side-temp-hostel.jpg";
import { BiWifi, BiBuildings } from "react-icons/bi";

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const Card = ({ title, icon, description }) => {
	const icons = {
		BiWifi: <BiWifi className="mr-3 text-3xl text-blue-500" />,
		BiBuildings: <BiBuildings className="mr-3 text-3xl text-blue-500" />,
	};

	return (
		<div className="bg-gray-300 shadow-xl card w-96">
			<div className="card-body">
				<div className="flex justify-items-start">
					{icons[icon]}
					<h2 className="text-black card-title">{title}</h2>
				</div>
				<p className="text-black">{description}</p>
			</div>
		</div>
	);
};

const Accommodation = () => {
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/accomodation-card-datas",
					{
						headers: {
							Authorization: `Bearer ${api_token}`,
						},
					}
				);
				setCardData(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className=" ">
			<div className="relative">
			<img src={HeaderImg} alt="Hero Background" className="w-full -top-[100px] relative -z-30" />
				<div className="absolute left-0 px-20 py-20 text-white bottom-5">
					<h1 className="text-5xl font-bold">Accommodation</h1>
					<p className="hidden mt-4 text-2xl lg:block">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
				</div>
			</div>

			<div className="flex flex-col flex-wrap items-center justify-center gap-8 my-20 md:flex-row md:items-stretch">
				{cardData.map((item, index) => (
					<Card
						key={index}
						title={item.attributes.title}
						icon={item.attributes.icon}
						description={item.attributes.description}
					/>
				))}
			</div>

			<div className="my-20 hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<img
						src={SideImg}
						className="w-[90%] h-[400px] object-cover object-bottom lg:h-auto lg:max-w-md rounded-xl shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Services</h1>
						<p className="py-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<h1 className="mb-8 text-5xl font-bold text-center lg:text-left lg:ml-20">
				Hostel Blocks
			</h1>
			<div className="mx-auto w-[95%] lg:w-[70%] pb-14">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Block</th>
							<th>Total Capacity</th>
							<th>Allocated</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>RK - Rinchen Khangzang</td>
							<td>500</td>
							<td>Boys</td>
						</tr>
						<tr className="active">
							<th>2</th>
							<td>Block - F</td>
							<td>200</td>
							<td>Girls</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Accommodation;
