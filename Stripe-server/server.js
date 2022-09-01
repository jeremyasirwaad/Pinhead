const express = require("express");
const app = express();
const cors = require("cors");
// This is your test secret API key.
const stripe = require("stripe")(
	"sk_test_51LQ3K2SIj4u97KeSOPAS04qDEtzHNxbMeS94foA65qjZDq2TSZTRD5xlY4D36NQMpclCvOmX919EFVgyN3tKWOTS00PBc9gFam"
);

app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const calculateOrderAmount = (items) => {
	console.log(items);
	// Replace this constant with a calculation of the order's amount
	// Calculate the order total on the server to prevent
	// people from directly manipulating the amount on the client
	return 990;
};

app.post("/create-payment-intent", async (req, res) => {
	const items = req.body;
	console.log(items);

	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 990,
		currency: "inr",
		metadata: { items }
	});

	res.send({
		clientSecret: paymentIntent.client_secret
	});
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
