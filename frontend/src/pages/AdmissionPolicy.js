import React from 'react'

const AdmissionPolicy = () => {
  return (
    <div>
      <h1 className="mt-20 mb-8 text-center md:text-2xl  lg:text-4xl font-bold"> Admission Policy</h1>
      <p className="text-center text-1xl sm:text-2xl">Admission / 19 June 2019 / Hits: 13851</p>
      <div className="py-6 mx-32 text-justify">
      <p>The University seeks to admit all students to its tertiary education programmes that have a reasonable expectation of 
      completing their programme of study successfully, subject to the proviso that the University has the necessary 
      resources to support the number of students on the programme.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
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
      <div className="flex justify-center my-10">
        <label htmlFor="my-modal-4" className="btn">Admission Policy</label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">Click here to download Admission Policy</h3>
            <p className="py-4"> <a href=" "> Admission Policy</a> </p>
          </label>
        </label>
      </div>
    </div>
  )
}

export default AdmissionPolicy
