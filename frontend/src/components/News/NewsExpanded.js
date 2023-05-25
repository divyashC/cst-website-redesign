 import React from 'react';
 import { FiEye } from 'react-icons/fi';

// const NewsComponent = ({ imageSrc, date, title, content }) => {
//   const truncatedContent = content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';
  
//   return (
//     <div className="flex flex-col border border-gray-300 rounded-md shadow-md p-4">
//       <div className="w-full h-48 bg-cover bg-center rounded-t-md" style={{ backgroundImage: `url(${imageSrc})` }}></div>
//       <div className="text-lg font-medium my-2">{title}</div>
//       <div className="text-sm text-gray-500 mb-2">{date}</div>
//       <div className="text-gray-600">{truncatedContent}<span className="text-blue-500">see more</span></div>
//     </div>
//   );
// };

// export default NewsComponent;

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



const NewsExpanded = () => {
  return (
    <div>
      <Div3Component/>
      <Div4Component/>
    </div>
  )
}

export default NewsExpanded

