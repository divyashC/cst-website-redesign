import React from "react";
import image1 from "../assets/images/cleaning.jpg"
import image2 from "../assets/images/webiner.jpg"
import image3 from "../assets/images/fablab.jpg"
import image4 from "../assets/images/workshop.png"
import image5 from "../assets/images/zerowaste.jpg"
import {Link} from "react-router-dom"
import researchpage from "../assets/images/researchservices.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import "../assets/css/tabs.css";
import {AiOutlineLink} from "react-icons/ai";

const ResearchAndServices = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
	  };
	return <div>
		 <div className="hero-section relative">
<<<<<<< HEAD
      <img src={researchpage} alt="Hero" className="h-900 w-full" style={{ height: '550px' }} />
	  <h1 className="absolute bottom-0 left-0 px-10 py-5 text-4xl font-bold text-white">
					Research and Services
				</h1>
=======
        <img src={researchpage} alt="Hero Background" className="w-full -top-[100px] relative -z-30" />
        <div className="absolute left-0 px-20 py-20 text-white bottom-5">
              <h1 className="text-5xl font-bold">Research and Services</h1>	
				</div>
>>>>>>> c13fa1fa211548e1f879f5195b843a27fb491671
	  </div>
	<div className="bg-[##FFFFFF] m-20">
	<Slider {...settings}>
    <div className="px-5 ">
    <div className="mx-2 h-64 shadow-lg bg-transparent"><a href="https://www.facebook.com/CST.University/"><img className="w-full h-full object-cover"  src={image1} /></a></div>
    </div>
    <div className="px-5 shadow-md rounded-sm">
    <div className="mx-2 h-64 "><a href="https://www.facebook.com/CST.University/"><img className="w-full h-full object-cover"  src={image2} /></a></div>
    </div>
    <div className="px-5 ">
    <div className="mx-2 h-64 shadow-lg"><a href="https://www.facebook.com/CST.University/"><img className="w-full h-full object-cover"  src={image3} /></a></div>
    </div>
    <div className="px-5 ">

    <div className="mx-2 h-64 shadow-lg"><a href="https://www.facebook.com/CST.University/"><img className="w-full h-full object-cover"  src={image4} /></a></div>
    </div>
    <div className="px-5 ">
    <div className="mx-2 h-64 shadow-lg"><a href="https://www.facebook.com/CST.University/"><img className="w-full h-full object-cover"  src={image5} /></a></div>
    </div>
    </Slider>
	<style>
      {`
        .slick-prev:before, .slick-next:before {
          color: black;
        }
      `}
    </style>
	</div>
  
<div className="flex justify-start ml-[100px]">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
    <div className="h-80 bg-[#eee] rounded-lg shadow-lg p-4">
    <h1 className="font-bold">Center for renewable and Sustainable Energy Development(CRSED)</h1>
  <Link to="/research-and-services/crsed">
    <button className="bg-[#ffcocb] p-3 font-semibold mt-[120px] self-end mt-12 ml-6">
      <a href="#_" class="relative inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read more</span>
<span className="relative invisible">
  Read more
  </span>
</a></button>
  </Link>
    </div>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3 ml-[50px]">
    <div className="h-65 bg-[#eee] rounded-lg shadow-lg p-4">
    <h1 className="font-bold">Center for Disaster Risk Reduction and Community Development Studies(CDRRCDS)</h1>
    <Link to="/research-and-services/crsed">
    <button className="bg-[#ffcocb] p-3 font-semibold mt-[120px] self-end mt-12 ml-6"><a href="#_" class="relative inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read more</span>
<span className="relative invisible">Read more</span>
</a> </button>
    </Link>
    </div>
  </div>

</div>

<div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Online Journals
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Training and Consultancy
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          EU projects
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
          <ul>               
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Ebsco</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Building Green</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Open Access Library</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">JSTOR</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Research4Life</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Taylor & Francis Online</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">ASCE- Journal of Construction Engineering and Management</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">NOCMAR Journal</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">European Journal of Energy Research</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Hindawi</p>
          </a>
          </li>
          <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
          <AiOutlineLink className="hover:text-sky-500 hover:scale-[120%] transition ease-in delay-200"/><p className="ml-6 mt-[-20px]">Journal of Renewable Energy and Environment</p>
          </a>
          </li>     
          </ul>  
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3 className="font-bold">Civil Engineering Department</h3>
          <br></br>
          <h2>Civil Engineering and Architecture Department have well-qualified staff members who can offer a wide range of consultancy services. The consultancy services offered by the Departments are reflected below:</h2>
          <br></br>
          <div className="ml-8">
          <ul className="list-disc">
          <li>Surveying: topographic survey, building setting out, cadastral survey</li>
          <li>Planning and design of construction projects</li>
          <li>Architectural and Structural Design & estimation of Buildings.</li>
          <li>Route alignment & design of roads</li>
          <li>Construction Materials Testing</li>
          <li>Environmental Impact Assessment</li>
          <li>Evaluation of road pavement</li>      
          </ul>
          </div>
          <br></br>
          <h2>All the tests have to be accompanied by a formal request letter addressed to the President or Head of Department (Civil), mentioning all the parameters and the details of the test.</h2>
          <br></br>
          <h2>Contact Person:</h2>
          <br></br>
          <h2>Chimi Wangmo</h2>
          <h2>(Lecturer)</h2>
          <h2>Civil Engineering and Architecture Department</h2>
          <h2>Royal University of Bhutan</h2>
          <h2>+975 77 77 20 40</h2>
        
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>
  <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="py-3 px-6 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL.#</th>
      <th className="py-3 px-6 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Title</th>
      <th className="py-3 px-6 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Status</th>
      <th className="py-3 px-6 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Link</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="py-4 px-6">1</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">2</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">3</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">4</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">5</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">6</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">7</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">8</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">9</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
    <tr>
      <td className="py-4 px-6">10</td>
      <td className="py-4 px-6">Erasmus+ KA 107 project</td>
      <td className="py-4 px-6">Active</td>
      <td className="py-4 px-6"><a href="#" className="text-blue-500 hover:text-blue-700">Click Here</a></td>
    </tr>
  </tbody>
  </table>      
        </p>
        </div>
      </div>
    </div>
	</div>;
};

export default ResearchAndServices;
 