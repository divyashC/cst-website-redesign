import React from "react";
import {
  FaAngleRight,
  FaRegHandshake,
  FaTools,
  FaToilet,
} from "react-icons/fa";
import ServiceImg from "../assets/images/services-header.jpg";
import { SiAcm } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { BsCameraReels} from "react-icons/bs";

const clubs = [
  { name: "ICT Services", icon: <SiAcm /> },
  { name: "Counseling Services", icon: <FaRegHandshake /> },
  { name: "Health Services", icon: <IoIosPeople /> },
  { name: "Radio", icon: <BsCameraReels /> },
  { name: "Electrical Maintenance", icon: <FaTools /> },
];

const Services = () => {
  return (
    <div>
      <div className="min-h-[500px] relative" >
      {/* discard
      style={{background:`url(${ServiceImg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed'}} */}
        <img src={ServiceImg} alt="Header" className="w-full h-[500px]" />
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
        <div className="absolute left-0 px-20 py-10 text-white bottom-5">
          <h1 className="text-3xl sm:text-5xl font-bold">Service and Facilities</h1>
      </div>
      </div>

      <div>
        <div className="flex">
          {/* this is where sidebar starts */}
          <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-start items-center scrollbar-hide">
              <label
                htmlFor="my-drawer"
                className="bg-white mt-[200px] ml-[-10px] text-black rounded-r-lg btn top-[100px] hover:text-white hover:bg-slate-400 lg:hidden"
              >
                <FaAngleRight />
              </label>
              <div className="h-full">
              <div className="flex flex-col rounded-lg p-5 gap-3 scrollbar-hide bg-gray-200 h-auto my-10">
                {/*here we are supposed to put the content  */}
                <h1 className="text-2xl font-semibold ml-5 text-left">ICT Services</h1>
                <div className="w-[70vw] h-auto bg-white p-10">
                  <div className="mb-10">
                    <hr className="w-full border-t border-gray-400 my-4" />
                    <h2 className="md:text-1xl lg:text-2xl font-bold my-3">
                      Internet and Wifi
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. "Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </p>
                  </div>
                  <div className="mb-10">
                    <hr className="w-full border-t border-gray-400 my-4" />
                    <h2 className="md:text-1xl lg:text-2xl font-bold my-3">
                      ICT Labs
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. "Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </p>
                  </div>
                  <div className="mb-10">
                    <hr className="w-full border-t border-gray-400 my-4" />
                    <h2 className="md:text-1xl lg:text-2xl font-bold my-3">
                      Maintenance and Support
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. "Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                <h1 className=" text-[1.75rem] font-bold pb-5 flex justify-center">
                  Services
                </h1>
                {clubs.map((val, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <a href=" ">
                        {val.icon} {val.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* this is where sidebar ends */}
        </div>
      </div>
    </div>
  );
};

export default Services;
