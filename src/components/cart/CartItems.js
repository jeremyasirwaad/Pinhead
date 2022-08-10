import React from "react";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router";
export const CartItems = (props) => {
	const navigate = useNavigate();

	return (
		<div
			className="cartitemcon"
			onClick={() => {
				navigate("/courses/" + props.courseId);
			}}
		>
			<div className="cartitemdiv1">
				<img src={props.imgsrc} alt="" />
				<div>
					<p className="cartitemheader">{props.title}</p>
					<p>{props.subtitle}</p>
					<StarRatings
						rating={parseFloat(props.rating)}
						starRatedColor={"#ffa743"}
						starDimension={18}
						starSpacing={2}
					></StarRatings>
					<span>({props.count})</span>
				</div>
			</div>
			<div className="cartitemdiv2">
				<span className="cartremove">Remove</span>
				<span className="cartaddwishlist">Add to WishList</span>
			</div>
			<span className="cartitemdiv3">${props.price}</span>
		</div>
	);
};
