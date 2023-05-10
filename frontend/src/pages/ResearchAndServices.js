import React from "react";
import image from "../assets/images/researchcenterimage.jpg"
import images from "../assets/images/researchcenterimage2.jpg"
import image1 from "../assets/images/tech-talk.jpg"
import image2 from "../assets/images/programmingcontest.jpg"
import image3 from "../assets/images/fablab.jpg"
import image4 from "../assets/images/makeathon.png"
import image5 from "../assets/images/readfest.jpg"
import researchpage from "../assets/images/researchservices.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResearchAndServices = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	  };
	return <div>
		 <div className="hero-section relative">
      <img src={researchpage} alt="Hero" className="h-900 w-full" />
	  </div>
	<div className="bg-[##FFFFFF] m-10 ">
	<Slider {...settings}>
    <div className="bg-gray-300 mx-5 h-64"><img className="w-full h-full object-cover"  src={image1} /></div>
    <div className="bg-gray-400 mx-5 h-64"><img className="w-full h-full object-cover"  src={image2} /></div>
    <div className="bg-gray-500 mx-5 h-64"><img className="w-full h-full object-cover"  src={image3} /></div>
    <div className="bg-gray-600 mx-5 h-64"><img className="w-full h-full object-cover"  src={image4} /></div>
    <div className="bg-gray-700 mx-5 h-64"><img className="w-full h-full object-cover"  src={image5} /></div>
    </Slider>
	<style>
      {`
        .slick-prev:before, .slick-next:before {
          color: black;
        }
      `}
    </style>
	</div>
		
<div className="bg-[#ECF9FF] grid grid-cols-3">
      <div className=" w-[100%] h-[450px]">
        <div className="bg-[#ECF9FF] overflow-hidden">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Research Centers</h3>
            <p className="text-gray-700"></p>
          </div>
        </div>
	</div>
	<div className=" w-[100%] h-[450px]">
        <div className="bg-[#ECF9FF] overflow-hidden ">
          <img className="w-full h-48 object-cover" src={image} alt="Card 2" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Center for Disaster Disk Reduction And Community Development Studies(CDRRCDS)</h3>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            See more!</button>
			<p className="text-gray-700"></p>
          </div>
        </div>
	</div>
	<div className=" w-[100%] h-[450px]">
        <div className="bg-[#ECF9FF] overflow-hidden">
          <img className="w-full h-48 object-cover" src={images} alt="Card 3"/>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Center for Disaster Risk Reduction And Community Development Studies(CDRRCDS)</h3>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm absolute">
            See More!</button>
			<p className="text-gray-700"></p>
          </div>
        </div>
      </div>
    </div>

		<div className="bg-[#FFFFFF] flex-col justify-center items-center p-10 h-[90v] ">
			<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
				<div className="collapse-title text-xl font-medium">
					EU Projects
				</div>
				<div className="collapse-content">
					<p>attribute is necessary to make the div focusable</p>
				</div>
			</div>
			<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5">
				<div className="collapse-title text-xl font-medium">
					Research Policies
				</div>
				<div className="collapse-content">
					<p>attribute is necessary to make the div focusable</p>
				</div>
			</div>
			<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-5">
				<div className="collapse-title text-xl font-medium">
					Linkages
				</div>
				<div className="collapse-content">
					<p>attribute is necessary to make the div focusable</p>
				</div>
			</div>
		</div>

	</div>;
};

export default ResearchAndServices;
