import React from "react";
import CSTLogo from "../assets/images/CSTLogo.png";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="quick-links">
					Quick Links
					<div className="col-one">Links</div>
					<div className="col-two">Links</div>
				</div>
				<div className="logo">
					<img src={CSTLogo} alt="CST Logo" height={120} width={120} />
				</div>
				<div className="address">
					Address
					<div className="col-one">Address</div>
				</div>
			</div>
			<div className="socials">Icon</div>
		</div>
	);
};

export default Footer;
