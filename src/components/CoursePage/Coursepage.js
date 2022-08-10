import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import HeaderPrimary from "../header/headerPrimary";
import StarRatings from "react-star-ratings";
import ReactPlayer from "react-player";
import { BsGlobe2 } from "react-icons/bs";
import { BsCloudUpload } from "react-icons/bs";
// import { MdOutlineDoubleArrow } from "react-icons/tb";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { UserAuth } from "../AuthContext";
// import data from "../../mockdata.json";
import { supabase } from "../../Supabase";
import { ToastContainer, toast } from "react-toastify";
// import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./Coursepage.css";

export const Coursepage = () => {
	const { dbuserobj, cartvalues, user, setcartvalues } = UserAuth();
	const { id } = useParams();
	const navigate = useNavigate();
	const [pagedata, setPagedata] = useState({});
	const [isloading, setIsloading] = useState(true);
	// const [inCart, setInCart] = useState("");
	const [hello, setHello] = useState(false);

	useEffect(() => {
		// setPagedata(data.find((e) => e.courseId == id));

		console.log(dbuserobj);
		console.log(cartvalues);
		getpagedata();
		// console.log(pagedata);
	}, []);

	const getpagedata = async () => {
		var fadata = await fetch("http://localhost:1337/api/courses/" + id)
			.then((res) => res.json())
			.then((result) => {
				console.log(result.data.attributes);
				setPagedata({ ...result.data.attributes, courseId: result.data.id });
				setIsloading(false);
			});
	};

	useEffect(() => {
		checkincart();
	});

	const checkincart = () => {
		// var buffer;
		cartvalues.forEach((e) => {
			if (e.courseId == pagedata.courseId) {
				console.log("Data Exists already");
				setHello(true);
			} else {
				// setHello(false);
			}
		});
	};

	const notify = () =>
		toast.success("Added to cart", {
			theme: "dark"
		});

	const addtocart = async () => {
		var filterdata = cartvalues.filter((e) => {
			return e.courseId == pagedata.courseId;
		});

		toast.success("added to cart", {
			theme: "dark",
			autoClose: 3000
		});

		console.log(filterdata);
		if (filterdata.length == 0) {
			setHello(true);
			cartvalues.push(pagedata);
			const res = await supabase
				.from("users")
				.update({ cart: cartvalues })
				.match({ email: user.email });
		} else {
			navigate("/cart");
		}

		// cartvalues.push(pagedata);
		// const res = await supabase
		// 	.from("users")
		// 	.update({ cart: cartvalues })
		// 	.match({ email: user.email });
	};

	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			{isloading ? (
				"locading"
			) : (
				<>
					<div className="coursecontainer">
						{/* <Toaster /> */}
						<div className="courseheadercontainer">
							<div className="coursetitle">
								<h2> {pagedata.courseTitle}</h2>
								<span>{pagedata.discription}</span>
								<div
									style={{
										margin: "10px",
										display: "flex",
										alignItems: "center",
										justifyItems: "center"
									}}
								>
									<StarRatings
										rating={pagedata.rating}
										starRatedColor="#ffa743"
										numberOfStars={5}
										name="rating"
										starSpacing="2px"
										starDimension="20px"
									/>
									<p style={{ fontSize: "18px", marginLeft: "10px" }}>
										{pagedata.rating} ({pagedata.noOfStudents})
									</p>
								</div>

								<p style={{ margin: "10px" }}>
									Instructors - {pagedata.instructor}
								</p>
								<div style={{ display: "flex", margin: "10px" }}>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center"
										}}
									>
										<BsCloudUpload color="white"></BsCloudUpload>
										<p style={{ marginLeft: "8px" }}>{pagedata.dateuploaded}</p>
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
										<p style={{ marginLeft: "8px" }}> {pagedata.language}</p>
									</div>
								</div>
							</div>
							<div className="previwandbuy">
								<ReactPlayer
									height={200}
									width={350}
									controls={true}
									url={pagedata.PreviewVideoLink}
								/>

								<button
									className="headerbtns"
									// disabled={inCart}
									onClick={() => {
										if (user != null) {
											// navigate("/login");
											addtocart();
										} else {
											navigate("/login");
										}
									}}
								>
									{hello ? "Go to cart" : "Add to cart"}
								</button>
								{/* <Toaster /> */}

								<button
									onClick={() => {
										navigate("/checkout/"+ id);
									}}
									className="headerbtns2"
								>
									Buy now
								</button>
							</div>
						</div>
					</div>
					<div className="wucanlearn">
						<div className="wucanlearninner">
							<span className="whatwillheader">What you'll learn</span>
							<div className="whatyouwillpoints">
								{pagedata.learningPoints.map((e) => {
									return (
										<div className="arrowpoint">
											<MdOutlineDoubleArrow />
											<p style={{ marginLeft: "10px" }}>{e}</p>
										</div>
									);
								})}
								{/* <div className="arrowpoint">
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
					</div> */}
							</div>
						</div>
						<div className="courseincluse">
							<div className="courseincluseinner">
								<span className="courseincluseheader">
									This course includes :
								</span>
								{pagedata.courseIncludePoints.map((e) => {
									return (
										<div className="arrowpoint2">
											<MdOutlineDoubleArrow />
											<p style={{ marginLeft: "10px" }}>{e}</p>
										</div>
									);
								})}
								{/* <div className="arrowpoint2">
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
						</div> */}
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
								{pagedata.discriptionPoints.map((e) => {
									return <p style={{ marginBottom: "10px" }}>{e}</p>;
								})}
							</div>
						</div>
					</div>
				</>
			)}
			{/* <Toaster /> */}
			<ToastContainer />
			<Footer></Footer>
		</div>
	);
};
