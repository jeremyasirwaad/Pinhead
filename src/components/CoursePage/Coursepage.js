import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import HeaderPrimary from "../header/headerPrimary";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";
import { BsGlobe2 } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
// import { MdOutlineDoubleArrow } from "react-icons/tb";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./Coursepage.css";
export const Coursepage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			<div className="coursecontainer">
				<div className="courseheadercontainer">
					<div className="coursetitle">
						<h2>Microsoft Excel - Excel from Beginner to Advanced</h2>
						<span>
							Officially created in collaboration with the Microsoft Office
							team.
						</span>
						<div
							style={{
								margin: "10px",
								display: "flex",
								alignItems: "center",
								justifyItems: "center"
							}}
						>
							<StarRatings
								rating={4.3}
								starRatedColor="#ffa743"
								numberOfStars={5}
								name="rating"
								starSpacing="2px"
								starDimension="20px"
							/>
							<p style={{ fontSize: "18px", marginLeft: "10px" }}>
								4.3 (12000)
							</p>
						</div>

						<p style={{ margin: "10px" }}>Created by - Jeremy Asirwaad</p>
						<div style={{ display: "flex", margin: "10px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								<BsCloudUpload color="white"></BsCloudUpload>
								<p style={{ marginLeft: "8px" }}>24/7/2022</p>
							</div>
							<div
								style={{
									display: "flex",
									marginLeft: "40px",
									alignItems: "center",
									justifyContent: "center"
								}}
							>
								<BsGlobe2></BsGlobe2>
								<p style={{ marginLeft: "8px" }}> English</p>
							</div>
						</div>
					</div>
					<div className="previwandbuy">
						<ReactPlayer
							height={200}
							width={350}
							controls={true}
							url="https://youtu.be/Vl0H-qTclOg"
						/>

						<button
							className="headerbtns"
							onClick={() => {
								navigate("/checkout");
							}}
						>
							Add to cart
						</button>
						<button className="headerbtns2">Buy now</button>
					</div>
				</div>
			</div>
			<div className="wucanlearn">
				<div className="wucanlearninner">
					<span className="whatwillheader">What you'll learn</span>
					<div className="whatyouwillpoints">
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Master Microsoft Excel from Beginner to Advanced
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Learn the most common Excel functions used in the Office
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Maintain large sets of Excel data in a list or table
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Wow your boss by unlocking dynamic formulas with IF, VLOOKUP,
								INDEX, MATCH functions and many more
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Build a solid understanding on the Basics of Microsoft Excel
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Harness the full power of Microsoft Excel by automating your day
								to day tasks through Macros and VBA
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Create dynamic reports by mastering one of the most popular
								tools, PivotTables
							</p>
						</div>
						<div className="arrowpoint">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>
								Access to a Professional Trainer with 10+ years of Excel
								Training
							</p>
						</div>
					</div>
				</div>
				<div className="courseincluse">
					<div className="courseincluseinner">
						<span className="courseincluseheader">This course includes :</span>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>21 hours on-demand video</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>12 articles</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>51 downloadable resources</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Full lifetime access</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Access on mobile and TV</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Certificate of completion</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Full lifetime access</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Access on mobile and TV</p>
						</div>
						<div className="arrowpoint2">
							<MdOutlineDoubleArrow />
							<p style={{ marginLeft: "10px" }}>Certificate of completion</p>
						</div>
					</div>
				</div>
			</div>
			<div className="reqanddes">
				<div
					style={{
						paddingLeft: "160px",
						paddingRight: "160px",
						paddingTop: "70px",
						paddingBottom: "70px",

						height: "100%",
						display: "flex",
						flexDirection: "column"
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<span className="reqanddesheader">Description</span>
						<div className="underlineorg"></div>
						<p style={{ marginBottom: "10px" }}>
							Enroll now to go through a deep dive of the most popular
							spreadsheet tool on the market, Microsoft Excel. As a Microsoft
							Certified Trainer I will use my 20+ years of Excel training to
							guide you step by step through the beginner to advanced level and
							beyond. As you participate in each of the 4 courses you will
							master Excel tools that will clear away the pain of stumbling
							through your daily tasks. You will start with the basics, building
							a solid foundation that will give you further knowledge as you
							progress into intermediate and advanced level topics. At
							completion of this course you will have mastered the most popular
							Excel tools and come out with confidence to complete any Excel
							tasks with efficiency and grace. Below are just a few of the
							topics that you will master:
						</p>
						<p style={{ marginBottom: "10px" }}>
							This Microsoft Excel courses will take you through 4 levels of
							Microsoft Excel topics (Beginner, Intermediate, Advanced and
							Macros/VBA). If your looking to take your Excel skills from
							beginner to advanced level and beyond, then this course is for
							you.
						</p>
						<p style={{ marginBottom: "10px" }}>
							No Prior Excel Knowledge Required
						</p>
						<p style={{ marginBottm: "10px" }}>
							icrosoft Excel 2007, 2010, 2013, 2013, 2019 or Microsoft 365 Excel
							Loaded on Computer to Follow Along with Instructor Lectures is
							Recommended
						</p>
					</div>
				</div>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
};
