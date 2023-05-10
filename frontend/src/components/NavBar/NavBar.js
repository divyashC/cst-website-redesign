import TopNav from "./TopNav";
import SideNav from "./SideNav";
import { useState } from "react";

const NavBar = () => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);

	const toggleSideNav = () => {
		setIsSideNavOpen((prevState) => !prevState);
	};

	return (
		<div>
			<TopNav toggleSideNav={toggleSideNav} isSideNavOpen={isSideNavOpen}/>
			<SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
		</div>
	);
};

export default NavBar;
