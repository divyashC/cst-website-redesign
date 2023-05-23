import React, { useState, useEffect } from "react";
import axios from "axios";
import bgDepartment from "../assets/images/bg-department.png"; // import your hero image here
import DofSH from "../assets/images/DofSH.jpg";


// const departments=[
//   "Department of Information Technology",
//   "Department of Science and Humanities",
//   "Department of Civil",
//   "Department of Electronics and Communication",
//   "Department of Architecture"
// ];

const programdata=[
{program: "Engineering Geology", pl: "Jane"},
{program: "program2", pl: "John"},
]

const profile=[
  {name: "Jane Doe", des:"Head of Department, Science and Humanities", num:"17111111", email: "jane.cst@rub.edu.bt"}
]

const api_token =
	"a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e";


const Academics = () => {
  const [acdata, setAcdata] = useState([]);
  // const [programdata, setProgramdata] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:1337/api/academics",
					{
						headers: {
							Authorization: `Bearer ${api_token}`,
						},
					}
				);
				setAcdata(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);


  const [departmentS,setDepartmentS]=useEffect(acdata[0].attributes.department);


  // useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get(
	// 				"http://localhost:1337/api/academics",
	// 				{
	// 					headers: {
	// 						Authorization: `Bearer ${api_token}`,
	// 					},
	// 				}
	// 			);
	// 			setProgramdata(response.data.data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

  return (
  <div>
      <div className="hero-section relative h-[400px]" style={{backgroundImage:`url(${bgDepartment})`}}>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
        <div className="  transform text-center z-10 flex justify-center items-center pt-10">
          <p className="text-white text-[4rem] font-bold mt-[15%] p-4 text-right xl:mt-[10%] md:block hidden">
            Department
          </p>
          <div className="h-72 w-2 bg-white mb-2 self-center hidden md:block"></div>
          <div className="flex flex-col justify-evenly items-center ml-7 text-left leading-loose h-[300px] ">
            <p className="text-white font-bold text-3xl mb-5 block md:hidden">Departments</p>
            <ul className="list-none ">
              {acdata.map((val,index)=>{
				  			return(
				  				<li key={index} className="mb-4 text-white hover:py-4 px-4  hover:bg-black hover:bg-opacity-40 hover:text-white transition-all duration-300"> 
				  				  {" "}
                      <button className="text-xl font-medium">{val.attributes.departments}</button>
				  				</li>
				  			);
				  		})}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-20 mb-10 text-center md:text-2xl  lg:text-4xl font-bold"> Department of Science and Humanities</h1>
        <div className="flex justify-around items-start ">
          <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
            <img src={DofSH} className="xs:w-[30%] rounded-lg shadow-2xl w-[300px]" />
            <div>
              <p className="py-6 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumSed 
              ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut 
              enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
              commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-4/5 border-t border-gray-400 my-4" />
        </div>
        <div className="mb-20">
          <h1 className="md:text-2xl lg:text-4xl text-center mb-6">Programs Offered</h1>
          <div className="overflow-x-auto content-center flex justify-center">
            <table className="table table-zebra w-[90%] mx-auto text-center max-w-4xl">
              <thead>
                <td></td>
                <td>Programme</td>
                <td>Programme Leader</td>
              </thead>
              <tbody>
                {programdata.map((val,index)=>{
                  return(
                    <tr key={index}>
                      <th>{index}</th>
                      <td>{val.program}</td>
                      <td>{val.pl}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-4/5 border-t border-gray-400 my-4" />
        </div>
        <div className=" flex justify-center mb-5 ">
          <div className="card card-side w-[80vw] sm:w-[400px] flex-col sm:flex-row bg-base-300 shadow-xl">
            <figure><img src={require("../assets/images/download.jpeg")} className="w-[90%] h-[90%] sm:h-[60%] rounded-lg ml-3 mt-3" alt="Movie"/></figure>
              {profile.map((val,index)=>{
                return(
                  <div className=" flex flex-col justify-center items-start pl-4 mb-7 sm:mb-0">
                    <h2 className="card-title">{val.name}</h2>
                    <p>{val.des}</p>
                    <p>{val.num}</p>
                    <p>{val.email}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
  </div>
  );
};

export default Academics;
