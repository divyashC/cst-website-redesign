import React, { useState, useEffect } from "react";
import axios from "axios";

// const data = [
// 	{
// 		main: "Staff Downloads",
// 		opt: [
// 			"Laptop Declaration Form 2021",
// 			"No Due Form For Staff",
// 			"Question Paper Moderation Checklist-new",
// 			"Vehicle Requisition Form",
// 		],
// 	},
// 	{
// 		main: "Student Downloads",
// 		opt: [
// 			"Academic Transcript Requisition Form",
// 			"No due form for first year students",
// 			"No due forms for other students",
// 			"RUB student code of conduct",
// 			"Admission Policy",
// 			"Student Handbook 2022-2023",
// 			"Plagiarism Declaration Form",
// 			"Student Leave Application Form",
// 		],
// 	},
// 	{
// 		main: "HR Related Downloads",
// 		opt: [
// 			"6-2-PROFESSIONAL DEVELOPMENT FORM",
// 			"LONG TERM TRAINING FORMALITY FORMS",
// 			"RUB TRAVELLING ALLOWANCE BILL",
// 			"RUB TRAVELLING AUTHORIZATION FORM",
// 			"SERVICE RENEWAL FORM FOR FIXED TERM",
// 			"STAFF TOUR REPORT FORM",
// 			"TRAINING & JOINING REPORT FORM",
// 			"TRAINING FEEDBACK FORM",
// 			"TRAINING FORM (NOMINATION FORM)",
// 			" LEAVE APPLICATION FORM",
// 			" EMPLOYMENT APPLICATION FORM",
// 			" 8-1-PROMOTION FORM",
// 			" RUB-MERITORIOUS-PROMOTION-FORM",
// 			" GUIDELINES FOR COUNSELING AND SUPPORT GROUP_TOR_2019",
// 			" CST LETTERHEAD",
// 			" PROBATION REVIEW FORM",
// 		],
// 	},
// 	{
// 		main: "Performance Evaluation Guidelines and Forms",
// 		opt: [
// 			"7-1-MonitoringTool For The Staff Pursuing PhD",
// 			"7-2-Guidelines For Academic Performance Index API For Academics",
// 			"7-3-Individual Work Planning Form Administrative And Technical Staff (2)",
// 			"7-4-Individual Work Planning Form For Academics",
// 			"7-5-Beneficiary Feedback Form",
// 			"7-6-Peer Feedback Form",
// 			"7-7-Subordinates Feedback Form",
// 			"7-8-Student Feedback Form",
// 		],
// 	},
// 	{
// 		main: "Sample Papers (Entrance Exams)",
// 		opt: [
// 			"ENTRANCE-EXAM_-CIVIL_2017",
// 			"ENTRANCE-EXAM_-ELECTRICAL_2017",
// 			"ENTRANCE-EXAM_-ELECTRICAL2018-FINAL",
// 			"ENTRANCE-EXAM_-ELECTRONICS2018-FINAL",
// 			"ENTRANCE-EXAM_2018_IT",
// 			"ENTRANCE-EXAM_CIVIL2018-FINAL",
// 		],
// 	},
// 	{
// 		main: "Sample Papers (Aptitude Exam)",
// 		opt: [
// 			"APTITUDE-TEST-2015",
// 			"APTITUDE-TEST-2016",
// 			"APTITUDE-TEST-PAPER-CST-2017-SET-A",
// 			"APTITUDE-TEST-PAPER-CST-2017-SET-B]",
// 		],
// 	},
// 	{
// 		main: "Student Project Reports",
// 		opt: [
// 			"Civil Engineering",
// 			"Electrical Engineering",
// 			"Electronics and Communication Engineering",
// 			"Information Technology",
// 			"Architecture",
// 			"ME-Renewable-Energy",
// 		],
// 	},
// 	{
// 		main: "Programme Documents",
// 		opt: [
// 			"DPD_ ME_RE_CST_Aug2017",
// 			"DPD_BArch_CST_Aug 2018",
// 			"DPD_BArch_CST_June 2020",
// 			"DPD_BE EG_DEC 2018",
// 			"DPD_CE_CST_Aug 2018",
// 			"DPD_ECE_CST_ JUNE 2008",
// 			"DPD_ECE_CST_ JUNE 2019",
// 			"DPD_EE_CST_ Aug 2018",
// 			"DPD_ICE_CST _Oct18",
// 			"DPD_IT_CST_Aug 2018",
// 			"DPD_EE_CST_Sep_2020",
// 			"DPD_ECE_CST_Sep_2020",
// 			"DPD_IT_CST_Sept 2020",
// 			"DPD_CE_CST_Sept 2020",
// 			"DPD_BE EG_SEPT 2020",
// 			"DPD_BE ICE_SEPT 2020",
// 			"DPD_BArch_CST_June2020",
// 			"DPD_M_CM_CST_FEB2021",
// 			"DPD_BArch_CST_MAY2021",
// 			"DPD_CE_CST_March 2020",
// 			"DPD_IT_CST_Sept 2021",
// 			"DPD_ME_RE_FEB 2022",
// 			"DPD_M_CM_JUNE 2022",
// 		],
// 	},
// 	{
// 		main: "Research Related Documents",
// 		opt: [
// 			"ZHIBTSOL (RUB Research Guideline)",
// 			"COLLEGE RESEARCH GUIDELINES",
// 			"APPLICATION FORM (STUDENT) FOR PUBLICATION SUPPORT",
// 			"APPLICATION FORM (STAFF) FOR PUBLICATION SUPPORT",
// 			"PROSPECTUS 2017",
// 			"GOOGLE APP PRIVACY POLICY",
// 		],
// 	},
// 	{
// 		main: "RUB Regulation Documents",
// 		opt: [
// 			"RUB IWP PREPARATION AND ASSESSMENT GUIDELINES",
// 			"RUBHRRR 2017",
// 			"RUB WHEEL OF ACADEMIC LAW - OVC RUB SITE",
// 		],
// 	},
// 	{
// 		main: "CST Newsletter",
// 		opt: [
// 			"CST Newsletter - Vol9IssueI - AUG 2019",
// 			"CST Newsletter - Vol10IssueI - OCT 2020",
// 			"CST Newsletter - Vol11IssueI - SEPT 2022",
// 		],
// 	},
// 	{
// 		main: "CST Magazine",
// 		opt: [
// 			"CST Annual Magazine - The Quest - 2020-2021",
// 			"CST Annual Magazine - The Quest - 2021-2022",
// 		],
// 	},
// ];

const apitoken =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const Downloads = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/downloads?pagination[pageSize]=500",
					{
						headers: {
							Authorization: `Bearer ${apitoken}`,
						},
					}
				);
				setData(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col items-center content-center py-10">
			<h1 className="text-[2.5rem] my-10 font-bold">Downloads</h1>
			{data && (
				<div className="w-[90%] bg-[#EBF3F6] flex flex-col justify-center content-center p-10 rounded-md gap-4">
					{data
						.reduce((acc, item) => {
							const category = item.attributes.category;
							const file_name = item.attributes.filename;
							const download_link = item.attributes.download_link;
							const existingDropdownIndex = acc.findIndex(
								(dropdown) => dropdown.category === category
							);

							if (existingDropdownIndex > -1) {
								acc[existingDropdownIndex].file_names.push(file_name);
								acc[existingDropdownIndex].download_links.push(download_link);
							} else {
								acc.push({
									category,
									file_names: [file_name],
									download_links: [download_link],
								});
							}

							return acc;
						}, [])
						.map((dropdown, key) => (
							<Dropdown
								key={key}
								category={dropdown.category}
								file_names={dropdown.file_names}
								download_links={dropdown.download_links}
							/>
						))}
				</div>
			)}
		</div>
	);
};

const Dropdown = ({ category, file_names, download_links }) => {
	return (
		<div className="w-[100%]">
			<div
				tabIndex={0}
				className="bg-white border rounded-md collapse collapse-arrow"
			>
				<input type="checkbox" />
				<div className="text-xl font-semibold collapse-title">{category}</div>
				<div className="collapse-content">
					<div className="flex flex-col gap-3 px-10">
						{file_names.map((file_name, index) => {
							const modifiedLink = download_links.slice(0, -3);
							return (
								<a
									href={modifiedLink}
									key={index}
									className="pt-3 border-t-2 hover:text-blue-800 hover:text-lg"
									target="_blank"
									rel="noopener noreferrer"
								>
									{file_name}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Downloads;
