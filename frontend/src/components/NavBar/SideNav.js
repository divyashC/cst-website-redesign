import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ isSideNavOpen, toggleSideNav }) => {
	return (
		<div
			className={`fixed top-0 right-0 z-50 w-9/12 h-screen bg-gray-800 opacity-80 md:w-6/12 lg:w-3/12 ${
				isSideNavOpen ? "" : "hidden"
			}`}
		>
			<i
				className="absolute top-0 right-0 p-4 text-5xl font-bold text-white cursor-pointer bi bi-x md:text-6xl lg:text-6xl md:p-6 lg:p-8"
				onClick={toggleSideNav}
			></i>
			<ul className="mt-20 ml-8 text-xl text-white md:text-2xl lg:text-3xl md:mt-28 lg:mt-36 md:ml-10 lg:ml-12">
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/">Home</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/about">About Us</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/programmes">Programmes</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/academics">Academics</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/news">News &amp; Announcements</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/research-and-services">Research &amp; Services</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/life-at-cst">Life at CST</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/connect">Connect</Link>
				</li>
				<li className="mb-4 md:mb-6 lg:mb-8">
					<Link to="/others">Others</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;
