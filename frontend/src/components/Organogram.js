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
//     { id: 12, name: ' ', position: 'Institute and Industrial Relation', reportsTo: 4 },
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
//         <div className="text-center mt-2">
//           <span>{node.name}</span>
//           <span className="text-gray-500 block">{node.position}</span>
//         </div>
//         {hasReports && (
//           <div className="mt-2 flex-grow flex">
//             {organogramData
//               .filter((n) => n.reportsTo === node.id)
//               .map((childNode) => renderNode(childNode))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return <div className="flex flex-wrap justify-center items-center">{renderNode(organogramData[0])}</div>;
// };

// export default Organogram;


// import React from 'react';
// import '../assets/css/organization-chart.css';

// const Organization = () => {
//   return (
//     <div className="content">
//       <h1>Responsive Organization Chart</h1>
//       <figure className="org-chart cf">
//         <ul className="administration">
//           <li>					
//             <ul className="director">
//               <li>
//                 <a href="#"><span>Director</span></a>
//                 <ul className="subdirector">
//                   <li><a href="#"><span>Assistante Director</span></a></li>
//                 </ul>
//                 <ul className="departments cf">								
//                   <li><a href="#"><span>Administration</span></a></li>
                  
//                   <li className="department dep-a">
//                     <a href="#"><span>Department A</span></a>
//                     <ul className="sections">
//                       <li className="section"><a href="#"><span>Section A1</span></a></li>
//                       <li className="section"><a href="#"><span>Section A2</span></a></li>
//                       <li className="section"><a href="#"><span>Section A3</span></a></li>
//                       <li className="section"><a href="#"><span>Section A4</span></a></li>
//                       <li className="section"><a href="#"><span>Section A5</span></a></li>
//                     </ul>
//                   </li>
//                   <li className="department dep-b">
//                     <a href="#"><span>Department B</span></a>
//                     <ul className="sections">
//                       <li className="section"><a href="#"><span>Section B1</span></a></li>
//                       <li className="section"><a href="#"><span>Section B2</span></a></li>
//                       <li className="section"><a href="#"><span>Section B3</span></a></li>
//                       <li className="section"><a href="#"><span>Section B4</span></a></li>
//                     </ul>
//                   </li>
//                   <li className="department dep-c">
//                     <a href="#"><span>Department C</span></a>
//                     <ul className="sections">
//                       <li className="section"><a href="#"><span>Section C1</span></a></li>
//                       <li className="section"><a href="#"><span>Section C2</span></a></li>
//                       <li className="section"><a href="#"><span>Section C3</span></a></li>
//                       <li className="section"><a href="#"><span>Section C4</span></a></li>
//                     </ul>
//                   </li>
//                   <li className="department dep-d">
//                     <a href="#"><span>Department D</span></a>
//                     <ul className="sections">
//                       <li className="section"><a href="#"><span>Section D1</span></a></li>
//                       <li className="section"><a href="#"><span>Section D2</span></a></li>
//                       <li className="section"><a href="#"><span>Section D3</span></a></li>
//                       <li className="section"><a href="#"><span>Section D4</span></a></li>
//                       <li className="section"><a href="#"><span>Section D5</span></a></li>
//                       <li className="section"><a href="#"><span>Section D6</span></a></li>
//                     </ul>
//                   </li>
//                   <li className="department dep-e">
//                     <a href="#"><span>Department E</span></a>
//                     <ul className="sections">
//                       <li className="section"><a href="#"><span>Section E1</span></a></li>
//                       <li className="section"><a href="#"><span>Section E2</span></a></li>
//                       <li className="section"><a href="#"><span>Section E3</span></a></li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </figure>
//     </div>
//   );
// };

// export default Organization;


import React from 'react';
import '../assets/css/organization-chart.css';

const organizationData = {
  name: 'Director',
  subordinates: [
    {
      name: 'Assistant Director',
      subordinates: []
    }
  ],
  departments: [
    {
      name: 'Administration',
      sections: []
    },
    {
      name: 'Department A',
      sections: [
        { name: 'Section A1' },
        { name: 'Section A2' },
        { name: 'Section A3' },
        { name: 'Section A4' },
        { name: 'Section A5' }
      ]
    },
    {
      name: 'Department B',
      sections: [
        { name: 'Section B1' },
        { name: 'Section B2' },
        { name: 'Section B3' },
        { name: 'Section B4' }
      ]
    },
    {
      name: 'Department C',
      sections: [
        { name: 'Section C1' },
        { name: 'Section C2' },
        { name: 'Section C3' },
        { name: 'Section C4' }
      ]
    },
    {
      name: 'Department D',
      sections: [
        { name: 'Section D1' },
        { name: 'Section D2' },
        { name: 'Section D3' },
        { name: 'Section D4' },
        { name: 'Section D5' },
        { name: 'Section D6' }
      ]
    },
    {
      name: 'Department E',
      sections: [
        { name: 'Section E1' },
        { name: 'Section E2' },
        { name: 'Section E3' }
      ]
    }
  ]
};

const Organization = () => {
  const renderSubordinates = (subordinates) => {
    if (subordinates.length === 0) return null;

    return (
      <ul className="subdirector">
        {subordinates.map((subordinate, index) => (
          <li key={index}>
            <a href="#"><span>{subordinate.name}</span></a>
            {renderSubordinates(subordinate.subordinates)}
          </li>
        ))}
      </ul>
    );
  };

  const renderSections = (sections) => {
    if (sections.length === 0) return null;

    return (
      <ul className="sections">
        {sections.map((section, index) => (
          <li className="section" key={index}><a href="#"><span>{section.name}</span></a></li>
        ))}
      </ul>
    );
  };

  const renderDepartments = (departments) => {
    if (departments.length === 0) return null;

    return (
      <ul className="departments cf">
        {departments.map((department, index) => (
          <li className={`department dep-${index}`} key={index}>
            <a href="#"><span>{department.name}</span></a>
            {renderSections(department.sections)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="content">
      <h1>Responsive Organization Chart</h1>
      <figure className="org-chart cf">
        <ul className="administration">
          <li>
            <ul className="director">
              <li>
                <a href="#"><span>{organizationData.name}</span></a>
                {renderSubordinates(organizationData.subordinates)}
                {renderDepartments(organizationData.departments)}
              </li>
            </ul>
          </li>
        </ul>
      </figure>
    </div>
  );
};

export default Organization;

