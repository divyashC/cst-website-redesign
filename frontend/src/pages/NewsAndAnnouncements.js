import React from 'react';
import { FiEye } from 'react-icons/fi';
import NewsImg from "../assets/images/news.png";
import NewsImg1 from "../assets/images/temp/news-img.png";


const Div3Component = ({ imageSrc, date, title, content }) => {
  const truncatedContent = content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';

  return (
    <div className="flex flex-col border border-gray-300 rounded-md shadow-md p-4 ml-[50px]">
      <div className="w-[1000px] h-[538px] bg-cover bg-center rounded-t-md" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="text-blue-500 text-[26px] font-medium my-2">{title}</div>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <div className="text-gray-600">{content}</div>
    </div>
  );
};

const Div4Component = ({ imageSrc, views, date, title, content }) => {
  const truncatedContent = content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';

  return (
    <div className="flex items-center justify-center w-[400px]  h-auto p-4 cursor-pointer bg-white hover:bg-[#D4D4D4] rounded-[20px]" onClick={() => window.location.href='/news'}>
      
      <div className="flex-grow ">
        <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="text-blue font-medium">{title}</div>
          <div className="flex items-center">
            <FiEye className="mr-1" />{views} views
            <i className="m-1 bi bi-calendar3"></i>{date}
          </div>
        </div>
        <div className="text-gray-600">{truncatedContent}<span className="text-blue-500">see more</span></div>
      </div> 
      {/* Horizontal line */}
      <hr className="border-gray-500 mt-4" />   
    </div>
    
  );
};

const NewsPage = () => {
  const div3Data = {
    imageSrc: NewsImg1,
    date: '8th June 2022',
    title: 'Auditor General, RAA Visit',
    content: 'A sensitization program was being held by the Royal Audit Authority, the Supreme Audit Institution (SAI) of Bhutan on 7th June 2022. The awareness program was presented comprehensively to the final year students and staff by the Auditor General, Dasho Tashi. <br />The program covered the evolutionary history of RAA, its roles and responsibilities, its visions, the Auditing models, and its mandates. Further, Dasho presented evidently on the importance of accountability, transparency and integrity. The program ended successfully with a contribution of the reports books from the RAA and handing of mementos for RAA’s golden jubilee (50 years) by Dasho Auditor General to the President of the college.'
  };

  const div4Data = [
    {
      imageSrc: 'div4-image1.jpg',
      views: 1000,
      date: 'May 16, 2023',
      title: 'News 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageSrc: 'div4-image2.jpg',
      views: 500,
      date: 'May 15, 2023',
      title: 'News 2',
      content: 'Sed nec nulla a turpis ultricies vehicula vitae et nulla.'
    },
    {
      imageSrc: 'div4-image3.jpg',
      views: 800,
      date: 'May 14, 2023',
      title: 'News 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla a turpis ultricies vehicula vitae et nulla.'
    }
  ];

  const div3Title = div3Data.title;
  return (
    <div className=" ">
      <div className="flex flex-col space-y-8">
        {/* Div 1 */}
        <div className="relative flex justify-center items-center h-[250px] w-auto">
        <img src={NewsImg} alt="Hero Background" className="w-full -top-[100px] relative -z-30" />
				{/* <img className="w-[1919px] h-[400px]"src={NewsImg} alt="Header" /> */}
				<h1 className="absolute top-50 left-50 px-20 py-10 text-5xl font-bold text-white">
        {div3Title}
				</h1>
			</div>

        {/* Div 2 */}
        <div className="flex space-x-4">
			
          {/* Div 3 */}
          <div className="w-[1200px]">
            <Div3Component {...div3Data} />
          </div>

          <hr className="h-[1200px] border-l-2 border-black" />

          {/* Div 4 */}
          <div className="flex flex-col space-y-4 w-1/2">
            {div4Data.map((data, index) => (
               <div key={index}>
               <Div4Component {...data} />
               {index !== div4Data.length - 1 && <hr className="border-gray-500 mt-8" />} {/* Horizontal line */}
             </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
