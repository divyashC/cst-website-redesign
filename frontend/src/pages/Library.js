import React from "react";
import HeaderImg from "../assets/images/library-header.png";
import SideImg from "../assets/images/temp/side-temp.jpg";

const Library = () => {
	return (
		<div className="bg-white">
			<div className="relative">
				<img src={HeaderImg} alt="Header" />
				<div className="absolute left-0 px-20 py-10 text-white bottom-5">
					<h1 className="text-5xl font-bold">Library</h1>
					<p className="mt-4 text-2xl">
						The CST Library has a good collection of books, journals, and
						magazines from different disciplines. The International and National
						Newspapers are also available. The library management system KOHA
						has been installed and is being implemented. Students can access it
						through the LAN.
					</p>
				</div>
			</div>

			<div className="my-20 hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<img src={SideImg} className="max-w-sm ml-20 rounded-lg shadow-2xl" />
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

			<div className="my-20 hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<div>
						<h1 className="text-5xl font-bold">Collections</h1>
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
					<img src={SideImg} className="max-w-sm mr-20 rounded-lg shadow-2xl" />
				</div>
			</div>

			<h1 className="mx-20 mb-8 text-5xl font-bold">Open Hours</h1>
			<div className="mx-32 mb-14">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Day</th>
							<th>From</th>
							<th>To</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>Weekdays</td>
							<td>9:00 AM</td>
							<td>10:00 PM</td>
						</tr>
						<tr className="active">
							<th>2</th>
							<td>Weekends</td>
							<td>9:00 AM</td>
							<td>5:00 PM</td>
						</tr>
					</tbody>
				</table>
				<div className="mt-2">
					<p>Note: Closed on Government Holidays</p>
					<p>
						Note: Open during weekdays and weekends and government holidays from
						8am to 12am
					</p>
				</div>
			</div>

			<div className="my-20 hero">
				<div className="flex-col hero-content lg:flex-row-reverse">
					<div>
						<h1 className="text-5xl font-bold">Policies</h1>
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
		</div>
	);
};

export default Library;
