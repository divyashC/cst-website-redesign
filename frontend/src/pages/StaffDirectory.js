import { FaAngleRight,FaGithub,FaWhatsapp} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {AiOutlineLink} from "react-icons/ai";
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
  const [directoryName, setDirectoryName] = useState(
    "Civil Engineering Department"
  );
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

          <div className="flex flex-col md:flex-row ">
            {/*  */}
            <div className="flex md:flex-col bg-gray-100 h-20 w-[90vw] md:h-[500px] md:w-20 mt-10  ml-[-15px]  md:ml-[18px] p-[5px] rounded-xl  gap-3 overflow-scroll scrollbar-hide">
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

            {/*card about staff intro  */}
            <div className=" h-[100%] w-[70vw] flex flex-col items-center pt-10 md:-mt-[130px] md:ml-0 mx-auto">
              <h1 className="md:text-[2rem] text-[1.75rem] font-semibold">Staff Directory</h1>
              <h2 className="md:text-[1.75rem] text-[1.25rem] text-gray-400 font-medium">
                {directoryName}
              </h2>
              <div className="flex flex-col items-center justify-center my-[50px] ">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src={require("../assets/images/download.jpeg")}
                      alt="staff_picture"
                    />
                  </figure>
                  <div className="card-body mt-[80%] ">
                    <h2 className="font-semibold text-xl ml-[13%]">{"Karma delma"}</h2>
                    <p className="font-normal ml-[13%]">{"Assistant Professor"}</p>
                    <ul className="flex text-3xl justify-evenly">
                    <li><HiMail className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/></li>
                    <li><FaWhatsapp className="hover:text-[#25D366] hover:scale-[120%] transition ease-in delay-200"/></li>
                    <li><FaGithub className="hover:text-gray-700 hover:scale-[120%] hover:bg-white rounded-2xl transition ease-in delay-200"/></li>
                    <li><AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/></li>
                    </ul>
                    
                  </div>
                </div>
              </div>
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
      {/* this is where sidebar ends */}
    </div>
  );
};

export default StaffDirectory;
