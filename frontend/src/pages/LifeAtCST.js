import {
	FaAngleRight,
	FaRegHandshake,
	FaTools,
	FaToilet,
} from "react-icons/fa";
import { SiAcm } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { BsCameraReels, BsJournalBookmark } from "react-icons/bs";
import { TbClubs, TbPlant2 } from "react-icons/tb";
import React, { useState, useEffect } from "react";
import axios from "axios";

const getIconComponent = (iconName) => {
	// Define your icon mapping here
	const iconMap = {
		SiAcm: <SiAcm />,
		FaToilet: <FaToilet />,
		IoIosPeople: <IoIosPeople />,
		FaRegHandshake: <FaRegHandshake />,
		BsJournalBookmark: <BsJournalBookmark />,
		FaTools: <FaTools />,
		BsCameraReels: <BsCameraReels />,
		TbPlant2: <TbPlant2 />,
	};

	return iconMap[iconName] || null;
};

const apitoken =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";

const LifeAtCST = () => {
	const [clubs, setClubs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:1337/api/clubs", {
					headers: {
						Authorization: `Bearer ${apitoken}`,
					},
				});
				setClubs(response.data.data);
				setSelectedClub(response.data.data[0]);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const [selectedClub, setSelectedClub] = useState();

	const handleClubSelection = (club) => {
		setSelectedClub(club);
	};

	return (
		<div>
			<div className="flex">
				{/* this is where sidebar starts */}
				<div className="drawer drawer-mobile scrollbar-hide">
					<input id="my-drawer" type="checkbox" className="drawer-toggle" />
					<div className="flex items-center justify-start drawer-content ">
						<label
							htmlFor="my-drawer"
							className="bg-white mt-[200px] ml-[-10px] text-black rounded-r-lg btn top-[100px] hover:text-white hover:bg-slate-400 lg:hidden"
						>
							<FaAngleRight />
						</label>
						<div className="flex flex-col items-center justify-center gap-3 p-5 rounded-lg scrollbar-hide">
							<h1 className="text-2xl font-semibold text-left w-[100%]">
								{selectedClub && selectedClub.attributes.club_name}
							</h1>
							<div className="h-[80vh] w-[70vw] bg-[#eee] flex justify-center p-10">
								{selectedClub && (
									<h1 className="text-[150px] text-center">
										{getIconComponent(selectedClub.attributes.icon_name)}
									</h1>
								)}
							</div>
						</div>
					</div>
					<div className="drawer-side">
						<label htmlFor="my-drawer" className="drawer-overlay"></label>

						<ul className="p-4 menu w-80 bg-base-100 text-base-content">
							<h1 className="text-[1.75rem] font-bold pb-5">
								Clubs and Societies
							</h1>
							{clubs.map((club) => (
								<li key={club.id}>
									<button onClick={() => handleClubSelection(club)}>
										{getIconComponent(club.attributes.icon_name)}{" "}
										{club.attributes.club_name}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* this is where sidebar ends */}
			</div>
		</div>
	);
};

export default LifeAtCST;
