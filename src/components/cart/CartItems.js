import React from "react";
import StarRatings from "react-star-ratings";

export const CartItems = () => {
	return (
		<div className="cartitemcon">
			<div className="cartitemdiv1">
				<img
					src="https://www.easyredmine.com/ER/media/images/articles/p8/f2742/Excel.jpg?width=1920&height=0&rmode=min&quality=75&token=NXAe7orcv2N5NbhLZcRCU%2BBr0k%2BTgZHdlyw33KHVe8g%3D"
					alt=""
				/>
				<div>
					<p className="cartitemheader">
						Microsoft Excel - Excel from Beginner to Advanced
					</p>
					<p>
						Learn python and how to use it to analyze,visualize and present data
					</p>
					<StarRatings
						rating={4.2}
						starRatedColor={"#ffa743"}
						starDimension={18}
						starSpacing={2}
					></StarRatings>
					<span>(120,000)</span>
				</div>
			</div>
			<div className="cartitemdiv2">
				<span className="cartremove">Remove</span>
				<span className="cartaddwishlist">Add to WishList</span>
			</div>
			<span className="cartitemdiv3">$5.66</span>
		</div>
	);
};
