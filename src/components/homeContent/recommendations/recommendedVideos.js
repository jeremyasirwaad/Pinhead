import React, { useEffect, useState } from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";
import Recommended from "../../../mockdata.json";

function RecommendedVideos(props) {
	const [featured, setfeatured] = useState([]);

	const getFeatured = async () => {
		var fadata = await fetch(
			"http://159.89.175.100/api/courses/?filters[type][$eq]=Featured"
		)
			.then((res) => res.json())
			.then((result) => {
				console.log(result.data);
				setfeatured(result.data);
			});
	};

	useEffect(() => {
		getFeatured();
	}, []);

	return (
		<>
			{props.type == "categories" ? (
				<div className="recommendedVideos">
					<VideoCard
						courseTitle={"Python Programming"}
						imgSrc={
							"http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/06/Python-Programming-Edureka.png"
						}
						// instructor={"Kyle Pew, Office Newb LLC"}
						// rating={4.6}
						noOfStudents={"(166,042)"}
						// price={"₹8,640"}
					/>
					<VideoCard
						courseTitle={"Excel"}
						imgSrc={"https://miro.medium.com/max/750/0*xniZtcX7sggQwhIs.jpg"}
						// instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
						// rating={4.4}
						noOfStudents={"(116,637)"}
						// price={"₹8,640"}
					/>
					<VideoCard
						courseTitle={"Web Development"}
						imgSrc={"https://i.imgur.com/02LiSmN.jpg"}
						// instructor={"Dr. Anglea Yu"}
						// rating={4.8}
						noOfStudents={"(49,923)"}
						// price={"₹8,960"}
					/>
					<VideoCard
						courseTitle={"Datascience & Analytics"}
						imgSrc={
							"https://www.dataquest.io/wp-content/uploads/2019/05/what-is-data-science-1.jpg"
						}
						// instructor={"Neil Anderson"}
						// rating={1}
						noOfStudents={"(25,489)"}
						// price={"₹1,280"}
					/>
				</div>
			) : (
				<div className="recommendedVideos">
					{featured.map((e) => {
						return (
							<VideoCard
								courseTitle={e.attributes.courseTitle}
								imgSrc={e.attributes.imgSrc}
								noOfStudents={e.attributes.noOfStudents}
								instructor={e.attributes.instructor}
								rating={e.attributes.rating}
								price={"$" + e.attributes.price}
								id={e.id}
							/>
						);
					})}
					{/* <VideoCard
						courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
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
						instructor={"Rob Percival, Daragh Walsh, Codestars by Rob Percival"}
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
					/> */}
				</div>
			)}
		</>
	);
}

export default RecommendedVideos;
