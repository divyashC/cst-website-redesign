import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Academics from "./pages/Academics.js";
import Connect from "./pages/Connect.js";
import Downloads from "./pages/Downloads.js";
import Events from "./pages/Events.js";
import LifeAtCST from "./pages/LifeAtCST.js";
import ResearchAndServices from "./pages/ResearchAndServices.js";
import StaffDirectory from "./pages/StaffDirectory.js";
import Tender from "./pages/Tender.js";
import News from "./pages/News.js";
import NewsAndAnnouncements from "./pages/NewsAndAnnouncements.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<NavBar />
			<Router>
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
					<Routes path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</Router>

			<Footer />
		</>
	);
};

export default App;
