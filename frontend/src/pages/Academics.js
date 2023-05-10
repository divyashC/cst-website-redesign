import React from "react";
import bgDepartment from "../assets/images/bg-department.png"; // import your hero image here
import DofSH from "../assets/images/DofSH.jpg";



const departments=[
  "Department of Information Technology",
  "Department of Science and Humanities",
  "Department of Civil",
  "Department of Electronics and Communication",
  "Department of Architecture"
];

const programme=[
{program: "Engineering Geology", pl: "Jane"},
{program: "program2", pl: "John"},
]

const profile=[
  {name: "Jane Doe", des:"Head of Department, Science and Humanities", num:"17111111", email: "jane.cst@rub.edu.bt"}
]

const Academics = () => {
  return (
  <div>
      <div className="hero-section relative h-[400px]" style={{backgroundImage:`url(${bgDepartment})`}}>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
        <div className="  transform text-center z-10 flex justify-center items-center pt-10">
          <p className="text-white text-[4rem] font-bold mt-[15%] p-4 text-right">
            Department
          </p>
          <div className="h-72 w-2 bg-white mb-2 self-center"></div>
          <div className="flex flex-col justify-evenly items-center ml-7 text-left leading-loose h-[300px]">
            <ul className="list-none ">
              {departments.map((val,index)=>{
				  			return(
				  				<li key={index} className="mb-4 text-white hover:text-gray-400 hover:underline underline-offset-8"> 
				  				  {" "}
				  				  <a href=" " className="text-xl font-medium" >{val}</a>
				  				</li>
				  			);
				  		})}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-20 mb-10 text-center md:text-2xl  lg:text-4xl font-bold"> Department of Science and Humanities</h1>
        <div className="mx-20 min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse ml-10">
            <img src={DofSH} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <p className="py-6 mr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
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
            <table className="table table-zebra w-full mx-auto text-center max-w-4xl">
              <thead>
                <td></td>
                <td>Programme</td>
                <td>Programme Leader</td>
              </thead>
              <tbody>
                {programme.map((val,index)=>{
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
        <div className=" flex justify-center mb-8">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={require("../assets/images/download.jpeg")} className="w-28 h-36 rounded-lg shadow-2xl" alt="Movie"/></figure>
              {profile.map((val,index)=>{
                return(
                  <div className="card-body">
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
