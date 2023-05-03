import { FaAngleRight, FaRegHandshake, FaTools, FaToilet} from "react-icons/fa";
import {SiAcm} from "react-icons/si";
import {IoIosPeople} from "react-icons/io";
import {BsCameraReels, BsJournalBookmark} from "react-icons/bs";
import {TbPlant2} from "react-icons/tb";
import React, { useState } from "react";

const clubs=[{name:"ACM Student Chapter ", icon:<SiAcm/>},
{name: "BTO", icon:<FaToilet/>},
{name: "Cultural", icon:<IoIosPeople/>},
{name: "GNH", icon:<IoIosPeople/>},
{name: "Kuenphen Tshogpa", icon:<FaRegHandshake/>},
{name: "Literary", icon:<BsJournalBookmark/>},
{name: "Maintenance", icon:<FaTools/>},
{name: "Multi-media", icon:<BsCameraReels/>},
{name: "Nangpai Zhenu", icon:<BsJournalBookmark/>},
{name: "NDLD", icon:<IoIosPeople/>},
{name: "Rangzhing Thuendrel Tshogpa", icon:<TbPlant2/>},
{name: "Rovers", icon:<IoIosPeople/>},
{name: "Y-Peer", icon:<IoIosPeople/>} ]


const LifeAtCST = () => {

	const [club,setClub]=useState("ACM Student Chapter");

	return (
		<div>
			<div className="flex">
    	  		{/* this is where sidebar starts */}
    	  		<div className="drawer drawer-mobile scrollbar-hide">
    	  		  	<input id="my-drawer" type="checkbox" className="drawer-toggle" />
    	  		  	<div className="drawer-content flex justify-start items-center ">
    	  		    	<label
    	  		    	  htmlFor="my-drawer"
    	  		    	  className="bg-white mt-[200px] ml-[-10px] text-black rounded-r-lg btn top-[100px] hover:text-white hover:bg-slate-400 lg:hidden">
    	  		    	  <FaAngleRight />
    	  		    	</label>
						<div className="flex flex-col rounded-lg p-5 gap-3 scrollbar-hide">
    	  		 			{/*here we are supposed to put the content  */}
							<h1 className="text-2xl font-semibold">{club}</h1>
							<div className="h-[80vh] w-[70vw] bg-[#eee] p-10"></div>
 
						</div>

        			</div>
        		<div className="drawer-side">
          			<label htmlFor="my-drawer" className="drawer-overlay"></label>

          			<ul className="menu p-4 w-80 bg-base-100 text-base-content ">
          			  <h1 className=" text-[1.75rem] font-bold pb-5">Clubs and Societies</h1>
						{clubs.map((val,index)=>{
							return(
								<li key={index}> 
								  {" "}
								  <a href=" " >{val.icon}{" "} {val.name}</a>
								</li>

							);
							})}
          			</ul>
        		</div>
      		</div>
      		{/* this is where sidebar ends */ }
    	</div>
	</div>
	);
};

export default LifeAtCST;
