import React, { useState, useEffect } from "react";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import img from "./undraw_Warning_re_eoyh.png";
import { CartItems } from "./CartItems";
import HeaderPopup from "../header/headerPopup";
// import { useContext, createContext } from "react";
import { UserAuth } from "../AuthContext";
import { supabase } from "../../Supabase";

import "./cart.css";
// import { useEffect } from "react";

export const Cart = () => {
	const { dbuserobj, cartvalues, user, mylearnings, setcartvalues } =
		UserAuth();

	const [isempty, setIsempty] = useState(true);
	const navigate = useNavigate();

	const fetchcallcourse = async () => {
		const data = await fetch("http://localhost:1337/api/courses")
			.then((res) => res.json())
			.then((res) => {
				// setCoursesfromstripe(res.data);
				console.log(res.data);
			});
	};

	useEffect(() => {
		console.log(mylearnings);
		if (!user) {
			navigate("/login");
		}
		console.log(dbuserobj);
	}, []);

	const gettotal = () => {
		var total = 0.0;
		cartvalues.forEach((e) => {
			total = total + parseFloat(e.price);
		});

		return total.toFixed(2);
	};

	return (
		<div>
			<HeaderPopup></HeaderPopup>
			<HeaderPrimary></HeaderPrimary>
			<div className="cartdiv">
				<p className="headercart">Shopping Cart</p>
				{cartvalues.length == 0 ? (
					<>
						<p className="subheadercart">0 Courses in Cart</p>
						<div className="shoppinginnerdiv">
							<img src={img} />
							<span className="carttextempty">
								Your cart is empty. Keep shopping to find a course!
							</span>
							<button
								className="cartButton"
								onClick={() => {
									navigate("/");
								}}
							>
								Keep shopping
							</button>
						</div>
					</>
				) : (
					<>
						<p className="subheadercart">1 Courses in Cart</p>
						<div
							className="shoppingpresentdiv
                        "
						>
							<div className="shoppingleft">
								{cartvalues.map((e) => {
									return (
										<CartItems
											imgsrc={e.imgSrc}
											title={e.courseTitle}
											subtitle={e.discription}
											rating={e.rating}
											count={e.noOfStudents}
											price={e.price}
											courseId={e.courseId}
										></CartItems>
									);
								})}
								{/* <CartItems
									imgsrc=""
									title=""
									subtitle=""
									rating=""
									count=""
									price=""
									courseId=""
								></CartItems> */}
							</div>
							<div className="shopingright">
								<p className="totalcart">Total:</p>
								<p className="cartvalue">${gettotal()}</p>
								<button
									className="checkoutcart"
									onClick={() => {
										var option = {
											key: "rzp_test_ynbYY4ADcG3lN5",
											key_secret: "tO6B46MLG6oPOTd1tMHt24hS",
											amount: gettotal() * 100,
											currency: "USD",
											name: user.displayName,
											description: "for testing purpose",
											handler: function async(response) {
												if (response.razorpay_payment_id) {
													// const pushtomyleanings = await supabase

													if (mylearnings == []) {
														const pushtomylearining = supabase
															.from("users")
															.update({ mylearnings: cartvalues })
															.match({ email: user.email });

														setcartvalues([]);
													} else {
														alert("wait code is building");
													}

													navigate(
														"/Paymentsuccessfull/" +
															response.razorpay_payment_id
													);
												} else {
													alert("Payment Failed, Try again");
												}
											},
											prefill: {
												name: user.displayName,
												email: user.email,
												contact: "9843632220"
											},
											notes: {
												address: "Razorpay Corporate office"
											},
											theme: {
												color: "#3399cc"
											}
										};
										var pay = new window.Razorpay(option);
										pay.open();
									}}
								>
									Buy Now
								</button>
								<p className="coupontext">Apply coupon</p>
								<div style={{ display: "flex" }}>
									<input type="text" className="couponinput" />
									<button className="couponapply">Apply</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<Footer></Footer>
		</div>
	);
};
