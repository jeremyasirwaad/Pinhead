import React from "react";
import "../../App.css";
import Header from "../Header";
// import HeaderPopup from "./headerPopup";
// import HeaderPrimary from "./headerPrimary";
import HomeContent from "../HomeContent";
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
import HomeFooter from "../HomeFooter";
// import Footer from "./footer";

function Home() {
	return (
		<div className="App">
			<Header />
			{/* <HeaderPopup />
      <HeaderPrimary /> */}
			<HomeContent />
			{/* <AdImage />
      <Feature1 />
      <Recommendations />
      <Feature2 />
      <FillerDiv />
      <TopCategories />
      <BecomeInstructor />
      <TrustedCompanies />
      <UdemyForBusiness />
      <VideoAdDiv /> */}
			<HomeFooter />
			{/* <Footer /> */}
		</div>
	);
}

export default Home;
