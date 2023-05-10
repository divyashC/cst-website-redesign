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
import Services from "./pages/Services";
import StaffDirectory from "./pages/StaffDirectory";
import Tender from "./pages/Tender";
import News from "./pages/News";
import NewsAndAnnouncements from "./pages/NewsAndAnnouncements";
import ErrorPage from "./pages/Error";
import GamesSports from "./pages/GamesSports";
import Library from "./pages/Library";
import Accommodation from "./pages/Accommodation";
import FeeStruture from "./pages/FeeStruture";
import AdmissionPolicy from "./pages/AdmissionPolicy";


const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/about"
					element={
						<Layout>
							<About />
						</Layout>
					}
				/>
				<Route
					path="/academics"
					element={
						<Layout>
							<Academics />
						</Layout>
					}
				/>
				<Route
					path="/connect"
					element={
						<Layout>
							<Connect />
						</Layout>
					}
				/>
				<Route
					path="/downloads"
					element={
						<Layout>
							<Downloads />
						</Layout>
					}
				/>
				<Route
					path="/events"
					element={
						<Layout>
							<Events />
						</Layout>
					}
				/>
				<Route
					path="/life-at-cst"
					element={
						<Layout>
							<LifeAtCST />
						</Layout>
					}
				/>
				<Route
					path="/research-and-services"
					element={
						<Layout>
							<ResearchAndServices />
						</Layout>
					}
				/>
				<Route
					path="/staff-directory"
					element={
						<Layout>
							<StaffDirectory />
						</Layout>
					}
				/>
				<Route
					path="/tender"
					element={
						<Layout>
							<Tender />
						</Layout>
					}
				/>
				<Route
					path="/news"
					element={
						<Layout>
							<News />
						</Layout>
					}
				/>
				<Route
					path="/news-and-announcements"
					element={
						<Layout>
							<NewsAndAnnouncements />
						</Layout>
					}
				/>
				<Route
					path="/games-sports"
					element={
						<Layout>
							<GamesSports />
						</Layout>
					}
				/>
				<Route
					path="/library"
					element={
						<Layout>
							<Library />
						</Layout>
					}
				/>
				<Route
					path="/accommodation"
					element={
						<Layout>
							<Accommodation />
						</Layout>
					}
				/>
				<Route
					path="/services"
					element={
						<Layout>
							<Services/>
						</Layout>
					}
				/>
				<Route
					path="/admission-policy"
					element={
						<Layout>
							<AdmissionPolicy/>
						</Layout>
					}
				/>
				<Route
					path="/fee-structure"
					element={
						<Layout>
							<FeeStruture/>
						</Layout>
					}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};
export default App;
