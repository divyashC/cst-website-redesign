import { FaAngleRight, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AiOutlineLink, AiOutlinePhone } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import axios from "axios";

// const staff = [
// 	{
// 		name: "karma",
// 		position: "President",
// 		eMail: "Karma.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "https://www.github.com/Karma",
// 		website: "https://www.karma.com",
// 	},
// 	{
// 		name: "pema",
// 		position: "Head of Department",
// 		eMail: "Pema.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/Pema",
// 		website: "https://www.pema.com",
// 	},
// 	{
// 		name: "nima",
// 		position: "Professor",
// 		eMail: "Nima.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/Nima",
// 		website: "https://www.Nima.com",
// 	},
// 	{
// 		name: "dawa",
// 		position: "Lecturer",
// 		eMail: "dawa.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/dawa",
// 		website: "https://www.dawa.com",
// 	},
// 	{
// 		name: "kyenphen",
// 		position: "Assistant Lecturer",
// 		eMail: "kyenphen.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/kyenphen",
// 		website: "https://www.kyenphen.com",
// 	},
// 	{
// 		name: "remi",
// 		position: "Assistant Lecturer",
// 		eMail: "remi.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/remi",
// 		website: "https://www.remi.com",
// 	},
// 	{
// 		name: "hemanth",
// 		position: "Assistant Lecturer",
// 		eMail: "hemanth.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/hemanth",
// 		website: "https://www.hemanth.com",
// 	},
// 	{
// 		name: "karze",
// 		position: "Assistant Lecturer",
// 		eMail: "karze.cst@rub.edu.bt",
// 		phone_no: "+975-17660098",
// 		gitHub: "www.github.com/karze",
// 		website: "https://www.karze.com",
// 	},
// ];

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const StaffDirectory = () => {
	const [departmentNames, setDepartmentNames] = useState([]);
	const [selectedDirectory, setSelectedDirectory] = useState();

	const handleDirectoryName = (data) => {
		setSelectedDirectory(data);
		setStaffSelected(
			staffData.filter((item) => item.attributes.dept === data)[0]
		);
	};

	const [staffData, setStaffData] = useState([]);
	const [staffSelected, setStaffSelected] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/staff-directories", {
				headers: { Authorization: `Bearer ${api_token}` },
			})
			.then((response) => {
				setStaffData(response.data.data);
				setStaffSelected(response.data.data[0]);
				setSelectedDirectory(response.data.data[0].attributes.dept);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleSelection = (data) => {
		setStaffSelected(data);
	};

	useEffect(() => {
		if (staffData.length > 0) {
			const uniqueDepartmentNames = [
				...new Set(staffData.map((item) => item.attributes.dept)),
			];
			setDepartmentNames(uniqueDepartmentNames);
		}
	}, [staffData]);

	return (
		<div className="flex">
			{/* this is where sidebar starts */}
			<div className="drawer drawer-mobile">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="flex items-center justify-start drawer-content ">
					<label
						htmlFor="my-drawer"
						className="bg-white mt-[200px] ml-[-10px] text-black rounded-r-lg btn top-[100px] hover:text-white hover:bg-slate-400 lg:hidden"
					>
						<FaAngleRight />
					</label>

					<div className="flex flex-col md:flex-row ">
						<div className="flex md:flex-col bg-gray-100 h-20 w-[90vw] md:h-[500px] md:w-20 mt-10  ml-[-15px]  md:ml-[18px] p-[5px] rounded-xl  gap-3 overflow-scroll scrollbar-hide">
							{staffData &&
								staffData
									.filter((data) => data.attributes.dept === selectedDirectory)
									.map((data) => {
										return (
											<div
												className="avatar w-[70px] relative z-10 rounded-full flex justify-center hover:scale-[120%] ease-out duration-300 tooltip tooltip-right"
												key={data.id}
												data-tip={data.name}
												onClick={() => handleSelection(data)}
											>
												<div
													className="w-9/10 h-[90%] rounded-full "
													data-tip={data.attributes.name}
												>
													{data.attributes.profileurl ? (
														<img
															className="object-cover"
															src={data.attributes.profileurl}
															alt="profilePic"
														/>
													) : (
														<img
															className="object-cover"
															src={require("../assets/images/download.jpeg")}
															alt="profilePic"
														/>
													)}
												</div>
											</div>
										);
									})}
						</div>

						{/*card about staff intro  */}
						{staffSelected && (
							<div className=" h-[100%] w-[70vw] flex flex-col items-center pt-10 md:-mt-[130px] md:ml-0 mx-auto">
								<h1 className="md:text-[2rem] text-[1.75rem] font-semibold">
									Staff Directory
								</h1>
								<h2 className="md:text-[1.75rem] text-[1.25rem] text-gray-400 font-medium">
									{selectedDirectory}
								</h2>
								<div className="flex flex-col items-center justify-center my-[50px] ">
									<div className="shadow-xl card w-96 bg-base-100 image-full">
										<figure>
											{staffSelected.attributes.profileurl ? (
												<img
													src={staffSelected.attributes.profileurl}
													alt="staff_picture"
													className="object-fill"
												/>
											) : (
												<img
													src={require("../assets/images/download.jpeg")}
													className="object-cover"
													alt="staff_picture"
												/>
											)}
										</figure>
										<div className="card-body mt-[80%] ">
											<h2 className="text-xl font-semibold">
												{staffSelected.attributes.name}
											</h2>
											<p className="font-normal">
												{staffSelected.attributes.position}
											</p>
											<ul className="flex justify-start gap-5 text-3xl">
												{staffSelected.attributes.email && (
													<li>
														<a
															href={`mailto:${staffSelected.attributes.email}`}
														>
															<HiMail className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200" />
														</a>
													</li>
												)}
												{staffSelected.attributes.phone_no && (
													<>
														<li>
															<a
																href={`https://wa.me/${staffSelected.attributes.phone_no}`}
															>
																<FaWhatsapp className="hover:text-[#25D366] hover:scale-[120%] transition ease-in delay-200" />
															</a>
														</li>
														<li>
															<a
																href={`tel:${staffSelected.attributes.phone_no}`}
															>
																<AiOutlinePhone className="hover:text-[#2565d3] hover:scale-[120%] transition ease-in delay-200" />
															</a>
														</li>
													</>
												)}
												{staffSelected.attributes.gitHub && (
													<li>
														<a href={staffSelected.attributes.gitHub}>
															<FaGithub className="hover:text-gray-700 hover:scale-[120%] hover:bg-white rounded-2xl transition ease-in delay-200" />
														</a>
													</li>
												)}
												{staffSelected.attributes.website && (
													<li>
														<a href={staffSelected.attributes.website}>
															<AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200" />
														</a>
													</li>
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className="drawer-side">
					<label htmlFor="my-drawer" className="drawer-overlay"></label>

					<ul className="p-4 menu w-80 bg-base-100 text-base-content ">
						<h1 className=" text-[1.75rem] font-bold pb-5">Departments</h1>
						{departmentNames &&
							departmentNames.map((data) => {
								return (
									<li key={data}>
										<p
											onClick={() => {
												handleDirectoryName(data);
											}}
										>
											{data}
										</p>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
			{/* this is where sidebar ends */}
		</div>
	);
};

export default StaffDirectory;
