import React, { useState } from "react";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import img from "./undraw_Warning_re_eoyh.png";
import { CartItems } from "./CartItems";

import "./cart.css";

export const Cart = () => {
	const [isempty, setIsempty] = useState(false);
	const navigate = useNavigate();

	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			<div className="cartdiv">
				<p className="headercart">Shopping Cart</p>
				{isempty ? (
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
								<CartItems></CartItems>
							</div>
							<div className="shopingright">
								<p className="totalcart">Total:</p>
								<p className="cartvalue">$5.66</p>
								<button className="checkoutcart">CheckOut</button>
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
