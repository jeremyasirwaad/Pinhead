import React from "react";
import "./videoCard.css";
import StarIcon from "@material-ui/icons/Star";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useNavigate } from "react-router-dom";

function VideoCard(props) {
	const navigate = useNavigate();

	return (
		<div
			className="videoCard"
			onClick={() => {
				navigate("/courses/" + props.id);
			}}
		>
			<img className="courseImg" src={props.imgSrc} alt="courseImg"></img>
			<h3>{props.courseTitle}</h3>
			<p>{props.instructor}</p>
			<div className="ratingDiv">
				<span className="rating">{props.rating}</span>
				{props.rating == null || props.rating == undefined ? (
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

				<span className="noOfStudents">{props.noOfStudents}</span>
			</div>
			<h3 className="price">{props.price}</h3>
			{props.rating == null || props.rating == undefined ? (
				<div></div>
			) : (
				<div className="bestsellerBadge">Bestseller</div>
			)}
		</div>
	);
}

export default VideoCard;
