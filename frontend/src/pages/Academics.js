import React from "react";
import bgDepartment from "../assets/images/bg-department.png"; // import your hero image here

const Academics = () => {
  return (
    <div className="hero-section relative">
      <img src={bgDepartment} alt="Hero" className="h-854" />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 flex divide-x-2">
        <p className="text-white font-bold mb-2 absolute bottom-0 left-0 p-4">
          Department
        </p>
        {/* <div className="h-6 w-px bg-white mb-2"></div> */}
        <ul className="list-none">
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
              Link 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
              Link 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
              Link 3
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
              Link 4
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-white hover:text-gray-400">
              Link 5
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academics;
