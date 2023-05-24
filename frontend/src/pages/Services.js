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

const servops = [
  { name: "ICT Services", icon: <SiAcm /> ,
    content:[
      {title: "Internet and Wifi", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "ICT Labs", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "Maintenance and Support", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
    ]
  },
  { name: "Counseling Services", icon: <FaRegHandshake />, 
    content:[
      {title: "Counseling", des:"Currently, we have 2 counselors, male and female. Students are approachable to both the counselors and are provided the choice to choose whoever they feel comfortable. Counseling sessions are taken in their office. To promote counseling further, the male counselor is provided to take a Post Graduate Diploma in Contemplative Counseling. Counselors provide assistance in terms of students wellbeing (psychological conditions)"},
      {title: "ICT Labs", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "Maintenance and Support", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
    ]
  },
  { name: "Health Services", icon: <IoIosPeople /> , 
    content:[
      {title: "Internet and Wifi", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "ICT Labs", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "Maintenance and Support", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
    ]
  },
  { name: "Radio", icon: <BsCameraReels />},
  { name: "Electrical Maintenance", icon: <FaTools />,  
    content:[
      {title: "Internet and Wifi", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "ICT Labs", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
      {title: "Maintenance and Support", des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo."},
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(servops[0]);

  

  return (
    <div>
      <div className="min-h-[500px] relative " >
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
                <h1 className="text-2xl font-semibold ml-5 text-left">{selectedService.name}</h1>
                <div className="w-[70vw] h-auto bg-white p-10"> 
                  {selectedService.content.map((val, index) => {
                  return (
                    <div className="mb-10">
                      <hr className="w-full border-t border-gray-400 my-4" />
                      <h2 className="md:text-1xl lg:text-2xl font-bold my-3">
                        {val.title}
                      </h2>
                      <p>
                        {val.des}
                      </p>
                      </div>
                  );
                  })}
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
                {servops.map((val, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <button onClick={()=>{setSelectedService(val)}}>
                        {val.icon} {val.name}
                      </button>
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
