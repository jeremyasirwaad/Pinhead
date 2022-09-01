import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import HeaderPrimary from "../header/headerPrimary";
import Footer from "../footer/footer";
import VideoCard from "../homeContent/recommendations/videoCard";
import { useParams } from "react-router";
import CheckoutForm from "./PaymentForms";
import "./paymentform.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
	"pk_test_51LQ3K2SIj4u97KeSpn728pRdTBKjEge8exIESNlDCYlvhmLgSk9HpjxsRUHRbilAdrFOHfUQpE1IcqxyxkU6KKI8002OOKAfa9"
);

export default function StripeCheckOut() {
	const { id } = useParams();
	const [clientSecret, setClientSecret] = useState("");
	const [pagedata, setPagedata] = useState({});

	const getdata = async () => {
		var fadata = await fetch("http://localhost:1337/api/courses/" + id)
			.then((res) => res.json())
			.then((result) => {
				console.log(result.data.attributes);
				setPagedata(result.data);

				// setIsloading(false);
			});
	};

	useEffect(() => {
		getdata();
		console.log(pagedata.id);
		// Create PaymentIntent as soon as the page loads
		const tosend = {
			id: id
		};
		if (pagedata) {
			fetch("http://localhost:4242/create-payment-intent", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				// body: JSON.stringify(tosend)
				body: JSON.stringify({ })
			})
				.then((res) => res.json())
				.then((data) => setClientSecret(data.clientSecret));
		}
	}, []);

	const appearance = {
		theme: "stripe"
	};
	const options = {
		clientSecret,
		appearance
	};

	return (
		<div>
			<HeaderPrimary></HeaderPrimary>
			<div className="checkoutpage">
				<div className="proddetails">
					<span className="checkingoutheader">Checking Out</span>
					<div className="underlineorg"></div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							justifyContent: "space-between",
							height: "100%"
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
								padding: "25px"
								// borderBottom: "1px solid black"
							}}
						>
							<div>
								<h3>Microsoft Excel - Excel from Beginner to Advanced</h3>
								<h5>Author - Jeremy</h5>
							</div>
							<span> $0.99</span>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
								padding: "25px",
								borderTop: "1px solid black"
							}}
						>
							{" "}
							<span>Total</span>
							<span>$0.99</span>{" "}
						</div>
					</div>
				</div>
				<div style={{ width: "180px" }}></div>
				<div className="cardcontainer">
					{" "}
					{clientSecret && (
						<Elements options={options} stripe={stripePromise}>
							<CheckoutForm />
						</Elements>
					)}
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
}
