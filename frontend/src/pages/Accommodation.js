import React from "react";
import HeaderImg from "../assets/images/hostel-header.png";
import SideImg from "../assets/images/temp/side-temp-hostel.jpg";
import { BiWifi, BiBuildings } from "react-icons/bi";

const card_data = [
	{
		title: "Wi-Fi",
		icon: "BiWifi",
		description:
			"We provide free WiFi network in all the hostels, upgraded labs and computer network and infrastructure. We are proud of the range of facilities you have access to, both in and beyond the classroom.",
	},
	{
		title: "Campus Facilities",
		icon: "BiBuildings",
		description:
			"We have created a learning environment that will bring out the best of your abilities.",
	},
];

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
	return (
		<div className="bg-white">
			<div className="relative">
				<img src={HeaderImg} alt="Header" />
				<div className="absolute left-0 px-20 py-10 text-white bottom-5">
					<h1 className="text-5xl font-bold">Accommodation</h1>
					<p className="hidden lg:block mt-4 text-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.
					</p>
				</div>
			</div>

			<div className="flex flex-col md:flex-row flex-wrap items-center md:items-stretch justify-center gap-8 my-20">
				{card_data.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						icon={item.icon}
						description={item.description}
					/>
				))}
			</div>

			<div className="my-20 hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<img src={SideImg} className="w-[90%] h-[400px] object-cover object-bottom lg:h-auto lg:max-w-md rounded-xl shadow-2xl" />
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

			<h1 className="text-center lg:text-left lg:ml-20 mb-8 text-5xl font-bold">Hostel Blocks</h1>
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
