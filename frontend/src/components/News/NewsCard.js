import React from 'react';
import { FiEye } from 'react-icons/fi';

const NewsComponent = ({ imageSrc, views, date, title, content }) => {
  const truncatedContent = content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';
  return (
    <div className="flex items-center justify-center w-[640px] mb-[100px] h-auto p-4 cursor-pointer bg-white hover:bg-[#D4D4D4] rounded-[20px]" onClick={() => window.location.href='/news'}>
      <div className="flex-none w-1/3 mr-4">
        <img src={imageSrc} alt="News thumbnail" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
          <div className="flex items-center">
            <FiEye className="mr-1" />{views} views
            <i className="m-1 bi bi-calendar3"></i>{date}
          </div>
        </div>
        <div className="text-black font-medium">{title}</div>
        <div className="text-gray-600">{truncatedContent}<span className="text-darkgray-500">see more</span></div>
      </div>    
    </div>
  );
};

export default NewsComponent;