import React from "react";
import "./videoCard.css";
import StarIcon from "@material-ui/icons/Star";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function SVideoCard(props) {
	const { hit } = { props };
	return (
		<div className="videoCard">
			<img className="courseImg" src={hit.imgSrc} alt="courseImg"></img>
			<h3>{hit.courseTitle}</h3>
			<p>{hit.instructor}</p>
			<div className="ratingDiv">
				<span className="rating">{hit.rating}</span>
				{hit.rating == null || hit.rating == undefined ? (
					<div></div>
				) : (
					<span className="stars">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarHalfIcon />
					</span>
				)}

				<span className="noOfStudents">{hit.noOfStudents}</span>
			</div>
			<h3 className="price">{hit.price}</h3>
			{hit.rating == null || hit.rating == undefined ? (
				<div></div>
			) : (
				<div className="bestsellerBadge">Bestseller</div>
			)}
		</div>
	);
}

export default SVideoCard;
