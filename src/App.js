import React from "react";
import "./App.css";
import Header from "./components/Header";
// import HeaderPopup from "./headerPopup";
// import HeaderPrimary from "./headerPrimary";
import HomeContent from "./components/HomeContent";
import { Login } from "./components/loginpage/Login";
// import AdImage from "./adImage";
// import Feature1 from "./featureDiv1";
// import Feature2 from "./featureDiv2";
// import Recommendations from "./recommendations";
// import FillerDiv from "./fillerDiv";
// import TopCategories from "./topCategories";
// import BecomeInstructor from "./becomeInstructor";
// import TrustedCompanies from "./trustedCompanies";
// import UdemyForBusiness from "./udemyForBusiness";
// import VideoAdDiv from "./videoAdDiv";
import HomeFooter from "./components/HomeFooter";
// import Footer from "./footer";
import Home from "./components/Home/Home";
import { Search } from "./components/Search/Search";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/login" element={<Login />}></Route>
				{/* <Route path="invoices" element={<Invoices />} /> */}
				{/* <Route path="dashboard" element={<Dashboard />} /> */}
			</Routes>
		</Router>
	);
}

export default App;
