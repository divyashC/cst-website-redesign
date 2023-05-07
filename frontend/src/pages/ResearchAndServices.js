import React from "react";

const ResearchAndServices = () => {
	return <div>

<div className="grid grid-cols-3">
      <div className=" w-[100%] h-[450px]">
        <div className="bg-white overflow-hidden">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 ">Research Centers</h3>
            <p className="text-gray-700"></p>
          </div>
        </div>
	</div>
	<div className=" w-[100%] h-[450px]">
        <div className="bg-white overflow-hidden ">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card 2" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Center for Disaster Disk Reduction And Community Development Studies(CDRRCDS)</h3>
            <p className="text-gray-700"></p>
          </div>
        </div>
	</div>
	<div className=" w-[100%] h-[450px]">
        <div className="bg-white overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card 3" />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Center for Disaster Risk Reduction And Community Development Studies(CDRRCDS)</h3>
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
