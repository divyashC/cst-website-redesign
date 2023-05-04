import React from 'react';

const NewsComponent = ({ imageSrc, date, title, content }) => {
  const truncatedContent = content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';
  
  return (
    <div className="flex flex-col border border-gray-300 rounded-md shadow-md p-4">
      <div className="w-full h-48 bg-cover bg-center rounded-t-md" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      <div className="text-lg font-medium my-2">{title}</div>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <div className="text-gray-600">{truncatedContent}<span className="text-blue-500">see more</span></div>
    </div>
  );
};

export default NewsComponent;
