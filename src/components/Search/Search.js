import React from "react";
// import Header from "../Header";
import HeaderPrimary from "../header/headerPrimary";
import HeaderPopup from "../header/headerPopup";
import HomeFooter from "../HomeFooter";
import Select from "react-select";
import FeatureCard from "../homeContent/featureDiv/featureCard";
import VideoCard from "../homeContent/recommendations/videoCard";
import {
	InstantSearch,
	SearchBox,
	RefinementList,
	Pagination
} from "react-instantsearch-dom";
import { searchClient } from "../../typeSenseAdapter";
import "./Search.css";
import CoursesHits from "../searchContainer/searchHits";
import "instantsearch.css/themes/satellite.css";

export const Search = () => {
	const options = [
		{
			value: "Microsoft Excel - Excel from Beginner to Advanced",
			label: "Microsoft Excel - Excel from Beginner to Advanced"
		},
		{
			value: "The Complete Digital Marketing Course - 12 Courses in 1",
			label: "The Complete Digital Marketing Course - 12 Courses in 1"
		},
		{
			value: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp",
			label: "iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
		},
		{
			value: "Solidity programing in Ethereum",
			label: "Solidity programing in Ethereum"
		},
		{
			value: "Cisco CCNA 200-301 – The Complete Guide to Getting Certified",
			label: "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
		}
	];

	const sortoptions = [
		{
			value: "Popularity",
			label: "Popularity"
		},
		{
			value: "Price",
			label: "Price"
		},
		{
			value: "Rating",
			label: "Rating"
		},
		{
			value: "Date Added",
			label: "Date Added"
		}
	];

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}}
		>
			<HeaderPopup />
			<HeaderPrimary />
			{/* <div style={{ height: "20px" }}></div> */}
			<InstantSearch indexName="courses" searchClient={searchClient}>
				<div className="searchdiv">
					<p className="alltopics">All Topics</p>
					<div className="searchcontainer">
						<div className="seachoptions">
							<div style={{ width: "100%" }}>
								<SearchBox></SearchBox>
								<div style={{ height: "30px" }}></div>
								<RefinementList attribute="title"></RefinementList>
							</div>
						</div>
						<div className="searchrender">
							<div className="searchfilterdiv">
								<div style={{ width: "220px" }}>
									<Select
										menuPlacement="bottom"
										menuPosition="fixed"
										placeholder="Sort order"
										options={sortoptions}
									/>
								</div>
								<div style={{ width: "220px" }}>
									<Select
										menuPlacement="bottom"
										menuPosition="fixed"
										placeholder="Formats"
									/>
								</div>
							</div>
							{/* <div className="searchrendergrid">
								<VideoCard
									courseTitle={
										"Microsoft Excel - Excel from Beginner to Advanced"
									}
									imgSrc={
										"https://www.easyredmine.com/ER/media/images/articles/p8/f2742/Excel.jpg?width=1920&height=0&rmode=min&quality=75&token=NXAe7orcv2N5NbhLZcRCU%2BBr0k%2BTgZHdlyw33KHVe8g%3D"
									}
									instructor={"Kyle Pew, Office Newb LLC"}
									rating={4.6}
									noOfStudents={"(166,042)"}
									price={"$0.99"}
								/>
								<VideoCard
									courseTitle={
										"The Complete Digital Marketing Course - 12 Courses in 1"
									}
									imgSrc={
										"https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg"
									}
									instructor={
										"Rob Percival, Daragh Walsh, Codestars by Rob Percival"
									}
									rating={4.4}
									noOfStudents={"(116,637)"}
									price={"$0.99"}
								/>
								<VideoCard
									courseTitle={
										"iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
									}
									imgSrc={
										"https://kodytechnolab.com/img/blog/big/guidelines-for-ios-app-development-process.jpg"
									}
									instructor={"Dr. Anglea Yu"}
									rating={4.8}
									noOfStudents={"(49,923)"}
									price={"$0.99"}
								/>
								<VideoCard
									courseTitle={
										"Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
									}
									imgSrc={
										"https://www.imedita.com/wp-content/uploads/2016/01/what-is-ccna-cisco-certified-network-associate.jpg"
									}
									instructor={"Neil Anderson"}
									rating={4.8}
									noOfStudents={"(25,489)"}
									price={"$0.99"}
								/>
								<VideoCard
									courseTitle={"Solidity programming in Etherum"}
									imgSrc={
										"https://www.simplilearn.com/ice9/free_resources_article_thumb/Solidity_Programming_2.jfif"
									}
									instructor={"Neil Anderson"}
									rating={4.8}
									noOfStudents={"(25,489)"}
									price={"$0.99"}
								/>
							</div> */}
							<CoursesHits />
							<Pagination />
						</div>
					</div>
				</div>
			</InstantSearch>
			{/* <HomeFooter /> */}
		</div>
	);
}
