import React from "react";
import CSTLogo from "../assets/images/CSTLogo.png";

const Footer = () => {
	return (
		// <div className="fixed bottom-0 w-full py-8 bg-gray-200">
		<div className="py-8 bg-gray-200">
			<div className="grid max-w-5xl grid-cols-3 gap-2 mx-auto">
				<div className="p-4">
					<h3 className="mb-4 text-xl font-bold text-gray-800">Quick Links</h3>
					<div className="flex flex-row">
						<div className="flex flex-col mr-12 space-y-2 text-gray-500">
							<a
								href="https://ims.rub.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								RUB IMS
							</a>
							<a
								href="https://vle.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								VLE (Moodle)
							</a>
							<a
								href="https://lib.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Library (OPAC)
							</a>
							<a
								href="https://journal.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Zoring Melong
							</a>
							<a
								href="http://mail.rub.edu.bt/"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Mail
							</a>
						</div>
						<div className="flex flex-col space-y-2 text-gray-500">
							<a
								href="https://ims.rub.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								RUB IMS
							</a>
							<a
								href="https://vle.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								VLE (Moodle)
							</a>
							<a
								href="https://lib.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Library (OPAC)
							</a>
							<a
								href="https://journal.cst.edu.bt"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Zoring Melong
							</a>
							<a
								href="http://mail.rub.edu.bt/"
								className="transition-colors duration-300 hover:text-blue-700"
							>
								Mail
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<img src={CSTLogo} alt="CST Logo" height={120} width={120} />
				</div>
				<div className="p-4">
					<h3 className="mb-4 text-xl font-bold text-gray-800">Address</h3>
					<div className="space-y-1 text-gray-500">
						<p>College of Science and Technology</p>
						<p>Rinchending, Phuentsholing</p>
						<p>Chhukha, Bhutan</p>
						<p>Post Box No. 173</p>
						<p>Email: info@cst.edu.bt</p>
						<p>Phone: +975-5-828215</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center mt-8">
				<a
					href="https://www.facebook.com/CST.University/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-blue-700"
				>
					<i className="text-3xl bi bi-facebook"></i>
				</a>
				<a
					href="https://www.youtube.com/@CSTMultimedia"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-red-500"
				>
					<i className="text-4xl bi bi-youtube"></i>
				</a>
				<a
					href="https://www.instagram.com/cst_rub/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-4 text-gray-700 transition-colors duration-300 hover:text-pink-500"
				>
					<i className="text-3xl bi bi-instagram"></i>
				</a>
			</div>
			<div className="flex justify-center mt-4 text-gray-700">
				<p>© 2023 College of Science &amp; Technology</p>
			</div>
		</div>
	);
};

export default Footer;
