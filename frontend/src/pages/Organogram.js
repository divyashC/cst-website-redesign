// import React from 'react';
// import { useState } from 'react';

// const Organogram = () => {
//   const [organogramData, setOrganogramData] = useState([
//     { id: 1, name: 'Dr.Cheki Dorji', position: 'President', reportsTo: null },
//     { id: 2, name: ' ', position: 'Dean of Academic Affair', reportsTo: 1 },
//     { id: 3, name: ' ', position: 'Dean of Student Affair', reportsTo: 1 },
//     { id: 4, name: ' ', position: 'Dean of Research and Industrial Linkages', reportsTo: 1 },
//     { id: 5, name: ' ', position: 'Administrative Officer', reportsTo: 1 },
//     { id: 6, name: ' ', position: 'Finance Officer', reportsTo: 1 },
//     { id: 7, name: ' ', position: 'ICT Officer', reportsTo: 1 },
//     { id: 8, name: ' ', position: 'Head of Departments', reportsTo: 2 },
//     { id: 9, name: ' ', position: 'Exam OC', reportsTo: 2 },
//     { id: 10, name: ' ', position: 'Librarian', reportsTo: 2 },
//     { id: 11, name: ' ', position: 'Student Service Officer', reportsTo: 3 },
//     { id: 12, name: ' ', position: 'Institute \n and Industrial Relation', reportsTo: 4 },
//     { id: 13, name: ' ', position: 'Publication Manager', reportsTo: 4 },
//     { id: 14, name: ' ', position: 'Estate Manager', reportsTo: 5 },
//     { id: 15, name: ' ', position: 'Dispatcher', reportsTo: 5 },
//     { id: 16, name: ' ', position: 'Drivers', reportsTo: 5 },
//     { id: 17, name: ' ', position: 'Sweepers', reportsTo: 5 },
//     { id: 18, name: ' ', position: 'Cooks', reportsTo: 5 },
//     { id: 19, name: ' ', position: 'Accountant', reportsTo: 6 },
//     { id: 20, name: ' ', position: 'ICTA', reportsTo: 7 },
//     { id: 21, name: ' ', position: 'Teaching Faculty', reportsTo: 8 },
//     { id: 22, name: ' ', position: 'Lab Technicians', reportsTo: 8 },

//   ]);

//   const renderNode = (node) => {
//     const hasReports = organogramData.some((n) => n.reportsTo === node.id);

//     return (
//       <div key={node.id} className="flex flex-col items-center">
//         <div className="p-3 h-24  rounded-sm bg-[#367c9e] flex items-center justify-center">
//           <span className="text-white">{node.position}</span>
//         </div>
//         <div className="mt-2 text-center">
//           <span>{node.name}</span>
//           <span className="block text-gray-500">{node.position}</span>
//         </div>
//         {hasReports && (
//           <div className="flex flex-grow mt-2 mx-3">
//             {organogramData
//               .filter((n) => n.reportsTo === node.id)
//               .map((childNode) => renderNode(childNode))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return <div className="flex flex-wrap items-center justify-center">{renderNode(organogramData[0])}</div>;
// };

// export default Organogram;

import React from "react";
import clsx from "classnames";

const profiles=[{
    "id": 1,
    "name": "Dr. Cheki Dorji",
    "role": "President",
    "profiles": [{
            "id": 2,
            "name": "Dean of Academic Affairs",
            "role": "DAA",
            "profiles": [{
                    "id": 8,
                    "name": "Head of Department",
                    "role": "HOD",
                    "profiles": [{
                            "id": 17,
                            "name": "Teaching Faculty",
                            "role": " ",
                        },
                        {
                            "id": 18,
                            "name": "Lab Technician",
                            "role": " ",
                        }
                    ]
                },
                {
                    "id": 9,
                    "name": "Exam OC",
                    "role": " ",
                    
                },
                {
                    "id": 10,
                    "name": "Librarian",
                    "role": " ",
                    
                }
            ]
        },
        {
            "id": 3,
            "name": "Dean of Student Affairs",
            "role": "DSA",
            "profiles": [{
                "id": 11,
                "name": "Student Service Officer",
                "role": "SSO"
            },
        ]
        },
        {
            "id": 4,
            "name": "Dean of Research and Industrial Linkages",
            "role": "DRIL",
            "profiles": [{
                "id": 12,
                "name": "Institute and Industrial Relation",
                "role": " "
            },
            {
                "id": 13,
                "name": "Publication Manager",
                "role": " "
            },
        ]
            
        },
        {
            "id": 5,
            "name": "Administrative Officer",
            "role": " ",
            "profiles": [
                {
                    "id": 14,
                    "name": "Estate Manager, Dispatcher, Drivers, Sweepers, Cooks",
                    "role": "Supportive Staff",
                    
                },
            ]
        },
        {
            "id": 6,
            "name": "Finance Officer",
            "role": " ",
            "profiles": [{
                "id": 15,
                "name": "Accountants",
                "role": " "
            },]
        },
        {
            "id": 7,
            "name": "ICT Officer",
            "role": "ICT",
            "profiles": [{
                "id": 16,
                "name": "ICTA",
                "role": " "
            },]
        }
    ]
}]

const Organogram=()=>{
        return (
            // bg-gray-400 w-full h-full absolute
            <div className="h-[100vh]">
              <h1 className="font-semibold text-5xl mt-10 mb-5 text-center overflow-x-hidden">Organogram</h1>
            <div className="flex flex-col justify-start items-start overflow-x-scroll">
              <div className=" text-center pt-5 overflow-y-auto">
                <div className="items-center justify-center flex">
                  {profiles && profiles.map((profile, idX) => (
                    <ProfileCard key={idX} {...profile} />
                  ))}
                </div>
              </div>
            </div>
            </div>
          );

}


const ProfileListItem = props => {
  return (
    <li className="relative p-6">
      <div className="absolute w-full h-8 -mt-8 border-t border-gray-500 transform first:translate-x-1/2 first:left-0 last:-translate-x-1/2 last:right-0" />
      <div className="relative flex justify-center">
        <div className="absolute w-1 h-8 -mt-8 border-l border-gray-500" />
        <ProfileCard {...props} />
      </div>
    </li>
  );
};


const ProfileList = ({ profiles = [] }) => {
  return (
    <ul className="flex flex-row mt-10 justify-center">
      {/* <PseudoBorder mTop="-mt-10" /> */}
      <div className="-mt-10 border-l-2 absolute h-10 border-gray-400" />
      {profiles.map((profile, idX) => {
        const len = profiles.length;
        return (
          <li key={idX} className="relative p-6">
            {/* <PseudoBorder
              bTop
              wfull
              style={{
                left: idX === 0 ? "50%" : 0,
                right: idX === len - 1 ? "50%" : 0
              }}
              className={classNames()
              // "transform",
              // { "translate-x-1/2 left-0": idX === 0 },
              // { "-translate-x-1/2 right-0": idX === len - 1 }
              }
              /> */}
            <div
              style={{
                left: idX === 0 ? "50%" : 0,
                right: idX === len - 1 ? "50%" : 0
              }}
              className="border-t-2 absolute h-8 border-gray-400 top-0"
            />
            <div className="relative flex justify-center">
              {/* <PseudoBorder mTop="-mt-6" /> */}
              <div className="-mt-6 border-l-2 absolute h-6 border-gray-400 top-0" />
              <ProfileCard {...profile} idX={idX} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ProfileCard = ({ id, name, role, profiles = [] }) => {
    return (
      <div className="text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-16">
            <img
              className="block rounded-full m-auto shadow-md"
              alt={name}
              src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
            />
          </div>
          <div className="text-gray-600 ">
            <p className="w-[150px]">{name}</p>
            <p className="text-[#09559c] font-bold">{role}</p>
          </div>
        </div>
        {profiles.length > 0 && <ProfileList profiles={profiles} />}
      </div>
  
      // <div className="text-center">
      //   <div className="flex justify-center items-center">
      //     <div className="bg-gray-100 shadow-md py-4 px-2 md:p-0 rounded-lg md:rounded-full text-center grid grid-flow-col items-center">
      //       <div className="md:mr-4 w-16 md:w-20">
      //         <img
      //           className="block shadow-md rounded-full"
      //           src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
      //           alt=""
      //         />
      //       </div>
      //       <div className="md:text-left text-center">
      //         <h2 className="text-md font-semibold w-32">{name}</h2>
      //         <p className="text-gray-700 text-sm uppercase">{role}</p>
      //       </div>
      //     </div>
      //   </div>
      //   {profiles.length > 0 && <ProfileList profiles={profiles} />}
      // </div>
    );
  };
  

const PseudoBorder = ({ className, mTop, bTop, wfull = false, ...rest }) => (
  <div
    className={clsx(
      className,
      mTop,
      // wfull ? "w-full" : "w-1",
      // {"w-full" : wfull },
      bTop ? "border-t-2" : "border-l-2",
      "absolute h-8 border-gray-400",
      "top-0 left-0 right-0"
    )}
    {...rest}
  />
);

export default Organogram;