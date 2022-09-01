import React, { useState } from "react";
import ReactPlayer from "react-player";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import "./Videocourse.css";
export const Videocourse = () => {
	const [dataindex, setDataindex] = useState(0);

	const videodata = [
		{
			title: "Introduction",
			url: "https://youtu.be/1ukSR1GRtMU?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "How to get Started",
			url: "https://youtu.be/TlB_eWDSMt4",
			time: "4hrs 9mins"
		},
		{
			title: "Flutter Basics",
			url: "https://youtu.be/FLQ-Vhw1NYQ?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Running Apps on Different Devices",
			url: "https://youtu.be/TSIhiZ5jRB0?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Widgets and Internals",
			url: "https://youtu.be/C5lpPjoivaw?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Navigation and Multiple Screens",
			url: "https://youtu.be/km2P_KQJyO0?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "State Management",
			url: "https://youtu.be/zwPBMg3SHVU?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Http Requests",
			url: "https://youtu.be/Hxh6nNHSUjo?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Adding Animation",
			url: "https://youtu.be/ABmqtI7ec7E?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Widgets and Internals",
			url: "https://youtu.be/C5lpPjoivaw?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Navigation and Multiple Screens",
			url: "https://youtu.be/km2P_KQJyO0?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "State Management",
			url: "https://youtu.be/zwPBMg3SHVU?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Http Requests",
			url: "https://youtu.be/Hxh6nNHSUjo?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		},
		{
			title: "Adding Animation",
			url: "https://youtu.be/ABmqtI7ec7E?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
			time: "4hrs 9mins"
		}
	];

	return (
		<div>
			<div className="videocourseheader">
				<span>99Tech | Flutter & Dart - The Complete Guide [2022 Edition]</span>
			</div>
			<div className="videocoursepage">
				<div className="videoleftsection">
					<div className="videoleftupper">
						<ReactPlayer
							height={"100%"}
							width={"100%"}
							controls={true}
							pip={true}
							url={videodata[dataindex].url}
						></ReactPlayer>
						<div className="videocourseinfo">
							<h3>About this course</h3>
							<p>
								A Complete Guide to the Flutter SDK & Flutter Framework for
								building native iOS and Android apps
							</p>
							<div className="vdivider"></div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "70%",
									marginTop: "30px"
								}}
							>
								<div>
									<p>This course Contains</p>
								</div>
								<div>
									<p>Skill level: All Levels</p>
									<p>Students: 203627</p>
									<p>Languages: English</p>
									<p>Captions: Yes</p>
								</div>
								<div>
									<p>Lecture: 100</p>
									<p>Video: 42.5 total hours</p>
								</div>
							</div>
						</div>
						<Footer></Footer>
					</div>
				</div>
				<div className="videorightsection">
					<div className="contentheaderdiv">
						<span>Course Contents</span>
					</div>
					{videodata.map((video, index) => {
						return (
							<div
								onClick={() => {
									setDataindex(index);
								}}
							>
								<div
									className="videodatadiv"
									style={{ display: "flex", flexDirection: "column" }}
								>
									<span>
										{index +
											1 +
											". " +
											video.title +
											"   " +
											"|" +
											"   " +
											video.time}
									</span>
									{/* <span style={{ marginLeft: "18px", fontSize: "14px" }}>
										{video.time}
									</span> */}
								</div>
								<div className="vdivider"></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
