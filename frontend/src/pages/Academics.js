import React from "react";
import bgDepartment from "../assets/images/bg-department.png"; // import your hero image here

const Academics = () => {
  return (
  <div>
      <div className="hero-section relative">
      <img src={bgDepartment} alt="Hero" className="h-854" />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="absolute bottom-0 left-1/4 transform text-center z-10 flex">
        <p className="text-white font-bold mb-2 p-4 text-right">
          Department
        </p>
        <div className="h-72 w-2 bg-white mb-2 self-center"></div>
        <div className="ml-4 text-left leading-loose">
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Department of Science and Humanities</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Department of Civil</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Department of Electronics and Communication</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Department of Architecture</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Department of Information and Technology</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      content
    </div>
  </div>
  );
};

export default Academics;
