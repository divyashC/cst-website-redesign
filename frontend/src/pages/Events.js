import React from 'react';
import { FiEye } from 'react-icons/fi';
import EventImg from "../assets/images/news1.png";
import img from "../assets/images/dummyNews.png";


const EventsComponent = ({ imageSrc, views, date, title, content }) => {
  const truncatedContent =
    content && typeof content === 'string' ? content.slice(0, 100) + '...' : '';
  return (
    <div className="flex items-center justify-center w-[640px] mb-[100px] h-auto p-4 cursor-pointer bg-[#D4D4D4] hover:bg-[#D4D4D4] rounded-[20px]" onClick={() => window.location.href='/events'}>
      <div className="flex-none w-1/3 mr-4">
        <img src={imageSrc} alt="Events thumbnail" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex-grow relative">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
          <div className="flex items-center">
            <FiEye className="mr-1" />
            {views} views
            <i className="m-1 bi bi-calendar3"></i>
            {date}
          </div>
        </div>
        <div className="text-black font-medium">{title}</div>
        <div className="text-gray-600">
          {truncatedContent}
          <span className="text-darkgray-500">see more</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // Dummy data
  const eventData = [
    {
      id: 1,
      imageSrc: img,
      views: 1000,
      date: 'May 22, 2023',
      title: 'Event 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
    },
    {
      id: 2,
      imageSrc: img,
      views: 500,
      date: 'May 21, 2023',
      title: 'Event 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
    },
    {
      id: 3,
      imageSrc: img,
      views: 500,
      date: 'May 21, 2023',
      title: 'Event 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
    },
    // Add more news data objects here...
  ];

  return (
    <div>
      <div className="relative flex justify-center items-center h-[250px] w-auto">
        <img src={EventImg} alt="Hero Background" className="w-full -top-[100px] relative -z-30" />
        <h1 className="absolute top-50 left-50 px-20 py-10 text-5xl font-bold text-white">
          Event
        </h1>
      </div>
      <div className="p-4 bg-white relative">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            {/* Vertical Line */}
            <div className="border-r-2 border-gray-400 h-[950px] absolute z-10 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            {eventData.map((event, index) => {
              if (index % 2 === 0) {
                // Display news component on the left side
                return (
                  <div key={event.id} className="ml-[150px] flex items-center">
                    {/* Vertical Line */}
                    <div className="w-1/2 relative">
                      <div className="border-r-2 border-gray-400 h-full absolute top-1/2 transform -translate-y-1/2"></div>
                    </div>
                    <div className="w-1/2 pl-4">
                      <EventsComponent {...event} />
                    </div>
                  </div>
                );
              } else {
                // Display news component on the right side
                return (
                  <div key={event.id} className="mr-[150px] flex items-center">
                    <div className="w-1/2 pr-4">
                      <EventsComponent {...event} />
                    </div>
                    {/* Vertical Line */}
                    <div className="w-1/2 relative">
                      <div className="border-l-2 border-gray-400 h-full absolute top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
