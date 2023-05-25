import React from 'react'

const FeeStruture = () => {
  return (
    <div className='my-5 flex flex-col justify-center items-center'>
      <h1 className='my-5 text-4xl text-center font-semibold'>Fee Structure</h1>
    <div className="overflow-x-auto w-[80%]">
    <table className="table w-[90%] my-5">
      {/* head */}
      <thead>
        <tr>
          <th>Type of Student</th>
          <th>Tuition</th>
          <th>Hostel &amp; Mess Fee</th>
          <th>CDF Fee</th>
          <th>Security Deposit</th>
          <th>College Accessories</th>
          <th>Total</th>
          <th>Mode of Payment</th>

        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
        <th>Self Financed</th>
        <th>Nu. 44,924.5</th>
          <td>Nu.12,500</td>
          <td>Nu.750</td>
          <td>Nu.2000</td>
          <td>Nu.1000</td>
          <td>Nu.61,174.5</td>
          <td>Demand Draft/MoB during registration</td>
        </tr>
        {/* row 2 */}
        <tr>
        <th>Government Scholarship</th>
        <th> - </th>
          <th> - </th>
          <th>Nu.750</th>
          <th>Nu.2000</th>
          <th>Nu.1000</th>
          <th>Nu.3750</th>
          <th>Demand Draft/MoB during registration</th>
        
        </tr>
        {/* row 3 */}
        <tr>
        <th>Other Scholarship</th>
        <th>Scholarship covers (Show proof during registration)</th>
          <th> 12,500</th>
          <th>Nu.750</th>
          <th>Nu.2000</th>
          <th>Nu.1000</th>
          <th>Nu.16,250</th>
          <th>Demand Draft/MoB during registration</th>
        </tr>
        <tr>
        <th>Self Funding Masters</th>
        <th>Nu.67,387</th>
          <th> 12,500</th>
          <th>Nu.750</th>
          <th>Nu.2000</th>
          <th>Nu.1000</th>
          <th>Nu.16,250</th>
          <th>Demand Draft/MoB during registration</th>
        </tr>
      </tbody>
    </table>

  </div>
    <div className='flex flex-col justify-start items-start pl-[10vw] mb-10 w-full'>
      <h1 className='my-5 text-xl text-center font-semibold'>For further Queries, Contact: -</h1>
      <p className='text-center'>Inchu Dorji, Student Service Officer (Male) - 17734846</p>
      <p className='text-center'>Chimi Dem, Student Service Officer (Female) - 17379976</p>
      <p className='text-center'>Leki Dorji, Dean of Student Affairs - 17785193</p>
    </div>
    </div>
  )
}

export default FeeStruture;
