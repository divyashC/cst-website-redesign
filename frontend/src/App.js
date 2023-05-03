import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Connect from "./pages/Connect";
import Downloads from "./pages/Downloads";
import Events from "./pages/Events";
import LifeAtCST from "./pages/LifeAtCST";
import ResearchAndServices from "./pages/ResearchAndServices";
import StaffDirectory from "./pages/StaffDirectory";
import Tender from "./pages/Tender";
import News from "./pages/News";
import NewsAndAnnouncements from "./pages/NewsAndAnnouncements";
import ErrorPage from "./pages/Error";

const App = () => {
	return (
		<Router>
			
			{/* placing navbar */}
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/academics" element={<Academics />} />
				<Route path="/connect" element={<Connect />} />
				<Route path="/downloads" element={<Downloads />} />
				<Route path="/events" element={<Events />} />
				<Route path="/life-at-cst" element={<LifeAtCST />} />
				<Route
					path="/research-and-services"
					element={<ResearchAndServices />}
				/>
				<Route path="/staff-directory" element={<StaffDirectory />} />
				<Route path="/tender" element={<Tender />} />
				<Route path="/news" element={<News />} />
				<Route
					path="/news-and-announcements"
					element={<NewsAndAnnouncements />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>

			{/* placing footer */}
			<Footer />
		</Router>
	);
};

export default App;
