import CSTLogo from "../../assets/images/CSTLogo.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
	return (
	  <div className="bg-[#fff0]">
		<div className="drawer drawer-end">
		  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
		  <div className="drawer-content flex flex-col">
			<div className="flex items-center justify-between px-6 py-4 bg-transparent shadow-md md:px-8 lg:w-auto lg:px-8">
			  <img className="h-12 md:h-16 lg:h-16" src={CSTLogo} alt="CST" />
			  <label htmlFor="my-drawer-4" className=" text-black drawer-button">
				<svg
				  className=" fill-current"
				  xmlns="http://www.w3.org/2000/svg"
				  width="32"
				  height="32"
				  viewBox="0 0 512 512"
				>
				  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
				</svg>
			  </label>
			</div>
			{children}
			<Footer />
		  </div>
		  <div className="drawer-side h-full">
			<label htmlFor="my-drawer-4" className="drawer-overlay "></label>
			<ul className="flex flex-col p-10 w-[350px] bg-[#021b2a] text-white text-2xl ">
			  <img className="h-auto w-20 mx-auto mb-10" src={CSTLogo} alt="CST" />
			  <li>
				<Link to="/">Home</Link>
			  </li>
			  <li className="mt-5">
				<Link to="/about">About Us</Link>
			  </li>
			  <li>
              <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Academics</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/admission-policy">Admission Policy</Link>
                  <Link to="/academics">Department</Link>
                </div>
              </div>
            </li>
            <li>
            <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">News &amp; Announcements</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/news">News</Link>
                  <Link to="/events">Events</Link>
                  <Link to="/tender">Tenders</Link>
                </div>
              </div>
            </li>
            <li className="my-5">
              <Link to="/research-and-services">Research &amp; Services</Link>
            
            </li>
            <li>
              <div className="collapse collapse-arrow pr-5 ">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Life At CST</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/accommodation">Accommodation</Link>
                  <Link to="/life-at-cst">Clubs</Link>
                  <Link to="/games-sports">Games and Sports</Link>
                  <Link to="/library">Library</Link>
                  <Link to="/services">Services and Facilities</Link>
                </div>
              </div>
            </li>
			<li>
              <div className="collapse collapse-arrow pr-5">
                <input type="checkbox" />
                <div className="collapse-title pl-0 ">Connect</div>
                <div className="collapse-content text-[1.2rem] flex flex-col gap-3 pb-0">
                  <Link to="/connect">FAQ</Link>
                  <Link to="/organogram">Organogram</Link>
                  <Link to="/staff-directory">Staff Directory</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/downloads">Downloads</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
  