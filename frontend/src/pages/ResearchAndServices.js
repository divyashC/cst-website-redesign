import React from "react";
import image1 from "../assets/images/tech-talk.jpg"
import image2 from "../assets/images/programmingcontest.jpg"
import image3 from "../assets/images/fablab.jpg"
import image4 from "../assets/images/makeathon.png"
import image5 from "../assets/images/readfest.jpg"
import researchpage from "../assets/images/researchservices.jpg";
import tabs from "./tabs"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResearchAndServices = () => {
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
      <img src={researchpage} alt="Hero" className="h-900 w-full" />
	  <h1 className="absolute bottom-0 left-0 px-10 py-5 text-4xl font-bold text-white">
					Research and Services
				</h1>
	  </div>
	<div className="bg-[##FFFFFF] m-10 ">
	<Slider {...settings}>
    <div className="mx-2 h-64 shadow-lg"><img className="w-full h-full object-cover"  src={image1} /></div>
    <div className="mx-2 h-64 shadow-lg"><img className="w-full h-full object-cover"  src={image2} /></div>
    <div className="mx-2 h-64 shadow-lg"><img className="w-full h-full object-cover"  src={image3} /></div>
    <div className="mx-2 h-64 shadow-lg"><img className="w-full h-full object-cover"  src={image4} /></div>
    <div className="mx-2 h-64 shadow-lg"><img className="w-full h-full object-cover"  src={image5} /></div>
    </Slider>
	<style>
      {`
        .slick-prev:before, .slick-next:before {
          color: black;
        }
      `}
    </style>
	</div>
  
<div class="flex flex-wrap">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div class="h-80 bg-[#eee] rounded-lg shadow-lg p-4">
    <h1 className="font-bold">Center for renewable and Sustainable Energy Development(CRSED)</h1>
    <button className="bg-[#ffcocb] p-3 font-semibold mt-[120px] self-end mt-12"><a href="#_" class="relative inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read more</span>
<span class="relative invisible">Read more</span>
</a></button>
    </div>
  </div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
    <div class="h-65 bg-[#eee] rounded-lg shadow-lg p-4">
    <h1 className="font-bold">Center for Disaster Risk Reduction and Community Development Studies(CDRRCDS)</h1>
    <button className="bg-[#ffcocb] p-3 font-semibold mt-[120px] self-end mt-12"><a href="#_" class="relative inline-flex items-center justify-center p-4 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read more</span>
<span class="relative invisible">Read more</span>
</a> </button>
    </div>
  </div>
</div>



	</div>;
};

export default ResearchAndServices;
