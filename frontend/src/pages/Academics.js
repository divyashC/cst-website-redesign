import React, { useState, useEffect } from "react";
import axios from "axios";
import bgDepartment from "../assets/images/bg-department.png"; // import your hero image here
import DofSH from "../assets/images/DofSH.jpg";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const Academics = () => {
	const [departmentData, setDepartmentData] = useState([]);
	const [selectedDept, setSelectedDept] = useState();
	const [progData, setprogData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/departments", {
				headers: { Authorization: `Bearer ${api_token}` },
			})
			.then((response) => {
				setDepartmentData(response.data.data);
				setSelectedDept(response.data.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get("http://localhost:1337/api/programmes", {
				headers: { Authorization: `Bearer ${api_token}` },
			})
			.then((response) => {
				setprogData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleDeptChange = (dept) => {
		setSelectedDept(dept);
	};

	return (
		<div>
			<div
				className=" relative h-[400px] w-auto"
				style={{ backgroundImage: `url(${bgDepartment})` }}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
				<div className="z-10 flex items-center justify-center pt-10 text-center transform ">
					<p className="text-white text-[4rem] font-bold mt-[15%] p-4 text-right xl:mt-[10%] md:block hidden">
						Department
					</p>
					<div className="self-center hidden w-2 mb-2 bg-white h-72 md:block"></div>
					<div className="flex flex-col justify-evenly items-center ml-7 text-left leading-loose h-[300px] ">
						<p className="block mb-5 text-3xl font-bold text-white md:hidden">
							Departments
						</p>
						{departmentData && (
							<ul className="list-none ">
								{departmentData.map((dept) => {
									const { dept_name } = dept.attributes;
									return (
										<li
											key={dept.id}
											className="px-4 mb-4 text-white transition-all duration-300 hover:py-4 hover:bg-black hover:bg-opacity-40 hover:text-white"
										>
											{" "}
											<button
												className="text-xl font-medium"
												onClick={() => handleDeptChange(dept)}
												key={dept.id}
											>
												{dept_name}
											</button>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</div>
			</div>
			<div>
				{selectedDept && (
					<h1 className="mt-20 mb-10 font-bold text-center md:text-2xl lg:text-4xl">
						{selectedDept.attributes.dept_name}
					</h1>
				)}
				<div className="flex items-start justify-around ">
					<div className="flex-col mx-auto hero-content lg:flex-row-reverse">
						<img
							src={DofSH}
							className="xs:w-[30%] rounded-lg shadow-2xl w-[300px]"
							alt="Department_Picture"
						/>
						<div>
							{selectedDept && (
								<p className="py-6 text-left">
									{selectedDept.attributes.description}
								</p>
							)}
						</div>
					</div>
				</div>

				{selectedDept &&
					selectedDept.attributes.dept_name !==
						"Department of Science and Humanities" && (
						<>
							<div className="flex justify-center">
								<hr className="w-4/5 my-4 border-t border-gray-400" />
							</div>
							<div className="mb-20">
								<h1 className="mb-6 text-center md:text-2xl lg:text-4xl">
									Programs Offered
								</h1>
								<div className="flex content-center justify-center overflow-x-auto">
									<table className="table table-zebra w-[90%] mx-auto text-center max-w-4xl">
										<thead>
											<tr>
												<th></th>
												<th>Programme</th>
												<th>Programme Leader</th>
											</tr>
										</thead>
										<tbody>
											{progData
												.filter(
													(progData) =>
														progData.attributes.dept_name ===
														selectedDept.attributes.dept_name
												)
												.map((progData, index) => (
													<tr key={index}>
														<th>{index + 1}</th>
														<td>{progData.attributes.prog_name}</td>
														<td>{progData.attributes.pl_name}</td>
													</tr>
												))}
										</tbody>
									</table>
								</div>
							</div>
						</>
					)}
				<div className="flex justify-center">
					<hr className="w-4/5 my-4 border-t border-gray-400" />
				</div>
				<div className="flex justify-center mt-6 mb-10">
					<div className="card card-side w-[80vw] sm:w-[400px] flex-col sm:flex-row bg-base-300 shadow-xl">
						<figure className="py-0 my-0">
							<img
								src={selectedDept.attributes.hod_profileUrl}
								className="w-[60%] h-[60%] sm:h-[60%] rounded-lg ml-5"
								alt="Movie"
							/>
						</figure>

						{selectedDept && (
							<div className="flex flex-col items-start justify-center pl-4 mb-2 sm:mb-0">
								<h2 className="card-title">
									{selectedDept.attributes.hod_name}
								</h2>
								<p>{selectedDept.attributes.dept_name}</p>
								<p>Head of Department</p>
								<div className="flex w-full mt-5 justify-evenly">
									<p
										className="text-xl tooltip"
										data-tip={selectedDept.attributes.hod_phone}
									>
										<BsTelephoneFill />
									</p>
									<a
										className="text-2xl tooltip"
										data-tip={selectedDept.attributes.hod_email}
										href={"mailto:" + selectedDept.attributes.hod_email}
									>
										<HiMail />
									</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Academics;
