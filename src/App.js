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
import StripeCheckOut from "./components/Stripe/StripeContainer";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet
} from "react-router-dom";
import { AuthContextProvider } from "./components/AuthContext";
import { Paymentsuccessfulpahe } from "./components/Stripe/Paymentsuccessfulpahe";
import { Coursepage } from "./components/CoursePage/Coursepage";
import { Cart } from "./components/cart/Cart";
import StripeCheckOutonlycard from "./components/Stripe/Stripecontaineronlycard";
import ScrollToTop from "./ScrollToTop.js";
import { Mylearnings } from "./components/Mylearnings/Mylearnings";
import { Videocourse } from "./components/Videocourse/Videocourse";

// import { supabase } from "./Supabase";

function App() {
	return (
		<AuthContextProvider>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mylearnings" element={<Mylearnings />}></Route>
					<Route path="/search" element={<Search />} />
					<Route path="/login" element={<Login />}></Route>
					<Route
						path="/courses/:id"
						element={<Coursepage></Coursepage>}
					></Route>
					<Route path="/checkout/:id" element={<StripeCheckOut />}></Route>
					<Route
						path="/checkoutcard/:id"
						element={<StripeCheckOutonlycard />}
					></Route>
					<Route path="/cart" element={<Cart />}></Route>
					<Route
						path="/Paymentsuccessfull/:razorid"
						element={<Paymentsuccessfulpahe></Paymentsuccessfulpahe>}
					></Route>
					<Route
						path="/videocourse"
						element={<Videocourse></Videocourse>}
					></Route>
					{/* <Route path="invoices" element={<Invoices />} /> */}
					{/* <Route path="dashboard" element={<Dashboard />} /> */}
				</Routes>
			</Router>
		</AuthContextProvider>
	);
}

export default App;
