import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import { useNavigate, useParams } from "react-router-dom";

export const Paymentsuccessfulpahe = () => {
	const navigate = useNavigate();
	const { razorid } = useParams();
	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			<div className="confirmationcont">
				<div className="confirminner">
					<IoCheckmarkDoneCircle size={50}></IoCheckmarkDoneCircle>
					<h3>Order Confirmed, ID: {razorid}</h3>
					<span>
						Your order is confirmed. You will receive an order confirmation
						email/SMS shortly with the expected delivery date for your item
					</span>
					<div style={{ display: "flex" }}>
						<button
							style={{ width: "210px", backgroundColor: "orange" }}
							onClick={() => {
								navigate("/");
							}}
						>
							Continue Shopping
						</button>{" "}
						<div style={{ width: "30px" }}></div>
						<button style={{ width: "210px", backgroundColor: "grey" }}>
							View Order
						</button>{" "}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};
