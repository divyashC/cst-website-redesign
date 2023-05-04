import React from "react";
import CSTLogo from "../../assets/images/CSTLogo.png";
import { AiOutlineMenu } from "react-icons/ai";

const TopNav = ({ toggleSideNav }) => {
	return (
		<div className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-8 lg:w-auto lg:px-8">
			<img className="h-12 md:h-16 lg:h-16" src={CSTLogo} alt="CST" />
			<AiOutlineMenu
				className="text-3xl text-gray-500 md:text-4xl lg:text-5xl "
				style={{ cursor: "pointer" }}
				onClick={toggleSideNav}
			/>
		</div>
	);
};

export default TopNav;
