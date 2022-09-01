import React from "react";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import VideoCard from "../homeContent/recommendations/videoCard";
import "./mylearning.css";
export const Mylearnings = () => {
	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			<div className="mylearningdiv">
				<p className="headercart">My Learnings</p>
				<div className="learningitems">
					<div className="mylearningsgrid">
						<VideoCard
							courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
							imgSrc={
								"https://www.easyredmine.com/ER/media/images/articles/p8/f2742/Excel.jpg?width=1920&height=0&rmode=min&quality=75&token=NXAe7orcv2N5NbhLZcRCU%2BBr0k%2BTgZHdlyw33KHVe8g%3D"
							}
							instructor={"Kyle Pew, Office Newb LLC"}
							// rating={4.6}
							// noOfStudents={"(166,042)"}
							// price={"$0.99"}
							isbestseller={false}
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
							// rating={4.4}
							// noOfStudents={"(116,637)"}
							isbestseller={false}
							// price={"$0.99"}
						/>
						<VideoCard
							courseTitle={
								"iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
							}
							imgSrc={
								"https://kodytechnolab.com/img/blog/big/guidelines-for-ios-app-development-process.jpg"
							}
							instructor={"Dr. Anglea Yu"}
							// rating={4.8}
							// noOfStudents={"(49,923)"}
							// price={"$0.99"}
							// isbestseller={false}
						/>
						<VideoCard
							courseTitle={
								"Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
							}
							imgSrc={
								"https://www.imedita.com/wp-content/uploads/2016/01/what-is-ccna-cisco-certified-network-associate.jpg"
							}
							instructor={"Neil Anderson"}
							// rating={4.8}
							// noOfStudents={"(25,489)"}
							// price={"$0.99"}
							// isbestseller={false}
						/>
						<VideoCard
							courseTitle={"Solidity programming in Etherum"}
							imgSrc={
								"https://www.simplilearn.com/ice9/free_resources_article_thumb/Solidity_Programming_2.jfif"
							}
							instructor={"Neil Anderson"}
							// rating={4.8}
							// noOfStudents={"(25,489)"}
							// price={"$0.99"}
							// isbestseller={false}
						/>
					</div>
				</div>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
};
