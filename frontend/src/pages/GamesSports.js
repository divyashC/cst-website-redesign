import React from "react";
import HeaderImg from "../assets/images/games-sports-header.png";
import SideImg from "../assets/images/temp/side-temp.jpg";

const GamesSports = () => {
	return (
		<div className=" ">
			<div className="relative">
			<img src={HeaderImg} alt="Hero Background" className="w-full -top-[100px] relative -z-30" />
				<div className="absolute left-0 px-20 py-20 text-white bottom-5">
					<h1 className="text-5xl font-bold">Games &amp; Sports</h1>
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
		</div>
	);
};

export default GamesSports;
