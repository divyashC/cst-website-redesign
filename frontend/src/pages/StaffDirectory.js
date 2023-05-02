import { FaAngleRight } from "react-icons/fa";
import React, { useState } from "react";

const staff = [
  "karma",
  "pema",
  "nima",
  "dawa",
  "kyenphen",
  "dawa",
  "redmi",
  "karze",
];

const StaffDirectory = () => {
	const [directoryName, setDirectoryName]=useState("Civil Engineering Department");
  return (
    <div className="flex">
      {/* this is where sidebar starts */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-start items-center ">
          <label
            htmlFor="my-drawer"
            className="bg-white mt-[200px] ml-[-10px] text-black rounded-r-lg btn top-[100px] hover:text-white hover:bg-slate-400 lg:hidden"
          >
            <FaAngleRight />
          </label>
		<div className="flex grid grid-flow-row flex-col gap-3">
          <div className=" grid-row bg-gray-100 h-20 md:h-[70%] w-[90vw] md:w-20 mt-[-650px] ml-[-15px] md:mt-[0px] md:ml-[18px] p-[5px] rounded-xl flex md:flex-col gap-3 overflow-scroll scrollbar-hide">
            {staff.map((data, key) => {
              return (
                <div
                  className="avatar w-[70px] rounded-full flex justify-center hover:scale-[120%] ease-out duration-300 "
                  key={data}
                >
                  <div className="w-9/10 h-[90%] rounded-full tooltip tooltip-right">
                    <img
                      className="object-cover"
                      src={require("../assets/images/download.jpeg")}
					  alt="profilePic"
                    />
                  </div>
                </div>
              );
            })}
          </div>

		 <div className="bg-[#eee] h-[100%] w-[90%] flex flex-col items-center pt-10 md:mt-0 md:ml-0">
			<h1 className="text-[2rem] font-semibold" >Staff Directory</h1>
			<h2 className="text-[1.75rem] text-gray-400 font-medium">{directoryName}</h2>

		 </div>
			</div>  



        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
            <h1 className=" text-[1.75rem] font-bold pb-5">Departments</h1>
            <li>
              {" "}
              <a href=" ">Civil Engineering Department</a>
            </li>
            <li>
              <a href=" ">Architecture Department</a>
            </li>
            <li>
              <a href=" ">Electrical Engineering Department</a>
            </li>
            <li>
              <a href=" ">ECE Department</a>
            </li>
            <li>
              <a href=" ">IT Engineering Department</a>
            </li>
            <li>
              <a href=" ">Science and Humanities Department</a>
            </li>
            <li>
              <a href=" ">Finance and Accounts Section</a>
            </li>
            <li>
              <a href=" ">Administration</a>
            </li>
            <li>
              <a href=" ">Library</a>
            </li>
            <li>
              <a href=" ">ICT Unit</a>
            </li>
          </ul>
        </div>
      </div>
      {/* this is where sidebar ends */ }
    </div>
  );
};

export default StaffDirectory;
