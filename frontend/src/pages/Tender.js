import React,{useState, useEffect} from 'react';
import { FiEye } from 'react-icons/fi';
import axios from 'axios';
import NewsImg from "../assets/images/news1.png";
import {Link} from "react-router-dom";
import img from "../assets/images/dummyNews.png";

const apitoken = `a011c6bc3920f5046b16031c19216beba64cca2f4815f1d225e44e7601646b1e00c7d76b6dc0a15fc43da74a8b7619efcbeaaa0bb2a525983ac43c43580a03fc7423112c6462c902049b516f484e78c4eef140969f14ccc1be970885872619e120579a2d8cba9cf1754f7571ec8c407f8dedbd8f7454560747635f3020efae7e`;


const NewsComponent = ({ news}) => {
  const truncatedContent =
    news.attributes.description && typeof news.attributes.description === 'string' ? news.attributes.description.slice(0, 100) + '...' : '';
  

  return (
    <div className="flex items-center justify-center w-[640px] mb-[100px] h-auto p-4 cursor-pointer bg-white hover:bg-[#D4D4D4] rounded-[20px]" >
      <div className="flex-none w-1/3 mr-4">
        <img src={news.attributes.imageUrl} alt="News thumbnail" className="w-full h-auto rounded-lg" />
      </div>
      <div className="flex-grow relative">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
          <div className="flex items-center">
            <FiEye className="mr-1" />
            {news.attributes.views} views
            <i className="m-1 bi bi-calendar3"></i>
            {news.attributes.date}
          </div>
        </div>
        <div className="text-black font-medium">{news.attributes.title}</div>
        <div className="text-gray-600">
          {truncatedContent}
          <span className="text-darkgray-500">see more</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [fetchedNewsAndAnnouncements, setFetchedNewsAndAnnouncements] =
		useState([]);
	const [sortedAnnouncements, setSortedAnnouncements] = useState([]);
	const [sortedEvents, setSortedEvents] = useState([]);

    useEffect(() => {
      const fetchNewsAndAnnouncements = async () => {
        try {
          const response = await axios.get(
            "http://localhost:1337/api/news-and-announcements",
            {
              headers: {
                Authorization: `Bearer ${apitoken}`,
              },
            }
          );
          const { data } = response.data;
  
          // Sort the announcements and events by date in descending order
          const announcements = data.filter(
            (item) => item.attributes.type === "tender"
          );
          const events = data.filter((item) => item.attributes.type === "tender");
  
          const sortedAnnouncements = announcements.sort(
            (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
          );
          const sortedEvents = events.sort(
            (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
          );
  
          setFetchedNewsAndAnnouncements(data);
          setSortedAnnouncements(sortedAnnouncements);
          setSortedEvents(sortedEvents);
        } catch (error) {
          console.error("Error fetching news and announcements:", error);
        }
      };
  
      fetchNewsAndAnnouncements();
    }, []);


  // Dummy data
  // const newsData = [
  //   {
  //     id: 1,
  //     imageSrc: img,
  //     views: 1000,
  //     date: 'May 22, 2023',
  //     title: 'Breaking News 1',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
  //   },
  //   {
  //     id: 2,
  //     imageSrc: img,
  //     views: 500,
  //     date: 'May 21, 2023',
  //     title: 'Breaking News 2',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
  //   },
  //   {
  //     id: 3,
  //     imageSrc: img,
  //     views: 500,
  //     date: 'May 21, 2023',
  //     title: 'Breaking News 3',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
  //   },
  //   {
  //     id: 4,
  //     imageSrc: img,
  //     views: 500,
  //     date: 'May 21, 2023',
  //     title: 'Breaking News 4',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae convallis mi. Phasellus eget nunc luctus, eleifend nisl eu, fringilla lectus. Cras quis nunc ut justo bibendum cursus...',
  //   },
  //   // Add more news data objects here...
  // ];

  return (
    <div>
      <div className="relative flex justify-center items-center  w-auto">
        <img src={NewsImg} alt="Hero Background" className="w-full h-[400px] relative -z-30" />
        <h1 className="absolute top-50 left-50 px-20 py-10 text-5xl font-bold text-white">
          TENDER
        </h1>
      </div>
      <div className="p-4 bg-[#F4F4F4] relative">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            {/* Vertical Line */}
            <div className="hidden lg:block border-r-2 border-gray-400 h-[60%] mt-[70px] absolute -z-0 left-1/2 transform -translate-x-1/2 "></div>

          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            {sortedEvents.map((news, index) => {
              if (index % 2 === 0) {
                // Display news component on the left side
                return (
                  <Link
									to="/news-and-announcements"
									state={{ from: news.attributes }}>
                  <div key={news.id} className="lg:ml-[150px] flex items-center justify-center">
                    {/* Vertical Line */}
                    <div className="lg:w-1/2 relative">
                    </div>
                    <div className="lg:w-1/2  flex ">
                    <div className="hidden lg:block w-5 h-5 rounded-full bg-gray-400 relative z-10 mt-[83px] right-[85px]" ></div>
                      <hr className="hidden lg:block border-gray-400 border-2 relative -ml-[90px] w-[200px] mt-[90px]" />
                      <NewsComponent news={news} />
                    </div>
                  </div>
                  </Link>
                );
              } else {
                // Display news component on the right side
                return (
                  <Link
									to="/news-and-announcements"
									state={{ from: news.attributes }}>
                  <div key={news.id} className="mr-[150px] flex items-center lg:-my-[100px]">
                    <div className="lg:w-1/2 flex">
                      <NewsComponent news={news} />
                      <hr className="hidden lg:block border-gray-400 border-2 relative -mr-[90px] w-[200px] mt-[90px]" />
                      <div className="hidden lg:block w-5 h-5 rounded-full bg-gray-400 relative z-10 mt-[83px] left-[85px]" ></div>

                    </div>
                    {/* Vertical Line */}
                    {/* <div className="w-1/2 relative">
                      <div className="border-l-2 border-gray-400 h-[100%] absolute top-1/2 transform -translate-y-1/2"></div>
                    </div> */}



                  </div>
                  </Link>
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
