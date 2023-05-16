import React from 'react'
import image from "../assets/images/researchcenterimage.jpg"
import image2 from "../assets/images/researchcenterimage2.jpg"

const Crsed = () => {
  return (
    <div className="mt-14">
    <h1 className="text-center font-bold text-2xl mt-8 mb-7">Centre for Renewable and Sustainable Energy Development (CRSED)</h1>
    <div className="ml-8 mb-8">
    <h1 className="font-bold text-lg mb-4 ml-4">Vision</h1>
    <h3 className="mb-5 ml-8">To be the centre of excellence in the field of renewable and sustainable energy technology.</h3>
    </div>

    <div className="ml-8 mb-5">
    <h1 className="font-bold text-lg mb-4 ml-4">Mission</h1>
    <ul className="list-inside list-disc ml-8"> 
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
  <li>Conduct research and enquiry in the field of renewable and sustainable energy technology.</li>
</ul>
</div>

<div className="flex flex-wrap">
  <div className="w-full lg:w-1/2 bg-white-200 p-6">
     <div className="ml-8">
      <h2 className="mb-7 font-bold">Center Coordinator</h2>
      <h4 className="mb-2">Mr. Namgay Tenzin</h4>
      <h4 className="mb-2">Electrical Engineering Department</h4>
      <h4 className="mb-2">Email: namgaytenzin.cst@rub.edu.bt</h4>
     </div>
  </div>
  <div className="w-full lg:w-1/2 bg-white-400 p-6 flex items-center justify-center">
    <img src={image} alt="image" className="max-w-full"/>
  </div>
</div>

{/* Center for Disaster Risk Reduction and Community Development Studies (CDRRCDS) */}
<div className="mt-14">
<h1 className="text-center font-bold text-2xl mt-8 mb-8">Center for Disaster Risk Reduction and Community Development Studies (CDRRCDS)</h1>
    <div className="ml-8 mb-8">
    <h1 className="font-bold text-lg mb-4 ml-4">Vision</h1>
    <h3 className="mb-5 ml-8">To be the centre of excellence in the field of Disaster Risk Reduction and Community Development Studies in Bhutan</h3>
    </div>

    <div className="ml-8 mb-5">
    <h1 className="font-bold text-lg mb-4 ml-4">Mission</h1>
    <ul className="list-inside list-disc ml-8"> 
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
  <li>Conduct research and enquiry in the field of  Disaster Risk Reduction and Community Development Studies in Bhutan</li>
</ul>
</div>

<div className="flex flex-wrap">
  <div className="w-full lg:w-1/2 bg-white-200 p-6">
     <div className="ml-8">
      <h2 className="mb-7 font-bold">Center Coordinator</h2>
      <h4 className="mb-2">Ms. Monika Thapa</h4>
      <h4 className="mb-2">Civil Engineering Department</h4>
      <h4 className="mb-2">Email: monikathapa.cst@rub.edu.bt</h4>
     </div>
  </div>
  <div className="w-full lg:w-1/2 bg-white-400 p-6 flex items-center justify-center">
    <img src={image2} alt="image2" className="max-w-full"/>
  </div>
</div>
</div>

    </div>
  )
}

export default Crsed