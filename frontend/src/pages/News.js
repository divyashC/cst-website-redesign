import React from 'react';
import NewsComponent from '../components/News/NewsCard';

const dummyData = [
  {
    id: 1,
    imageSrc: 'https://dummyimage.com/400x400/000/fff&text=News+1',
    views: 1000,
    date: 'May 1, 2023',
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    imageSrc: 'https://dummyimage.com/400x400/000/fff&text=News+2',
    views: 2000,
    date: 'April 30, 2023',
    title: 'Sed ut perspiciatis unde omnis',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    id: 3,
    imageSrc: 'https://dummyimage.com/400x400/000/fff&text=News+3',
    views: 3000,
    date: 'April 29, 2023',
    title: 'At vero eos et accusamus et iusto odio',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
  },
  {
    id: 4,
    imageSrc: 'https://dummyimage.com/400x400/000/fff&text=News+4',
    views: 4000,
    date: 'April 28, 2023',
    title: 'Excepteur sint occaecat cupidatat',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];

const NewsPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F4F4F4]">
      {/* First div */}
      {/* <div className="flex items-center justify-center h-1/3 bg-gray-300">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">News</h1>
          <NewsComponent {...dummyData[0]} />
        </div>
      </div> */}
	  
	  

      {/* Second div */}
      <div className="flex-1 flex items-center ">
        <div className="flex-grow border-r-2 pr-8">
          {dummyData.slice(1, 3).map(data => <NewsComponent key={data.id} {...data} />)}
        </div>
        <hr className="mx-8 border-gray-400 h-full" />
        <div className="flex-grow pl-8">
          <NewsComponent {...dummyData[3]} />
        </div>
      </div>

      {/* Third div */}
      {/* <div className="flex items-center justify-center h-1/3 bg-gray-300">
        <div className="text-center">
          <NewsComponent {...dummyData[1]} />
        </div>
        <hr className="mx-8 border-gray-400 h-full" />
        <div className="text-center">
          <NewsComponent {...dummyData[2]} />
        </div>
      </div> */}
    </div>
  );
};

export default NewsPage;
