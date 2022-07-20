import React from "react";
import { connectHits } from "react-instantsearch-dom";
import SVideoCard from "../Search/svideoCard";
import VideoCard from "../homeContent/recommendations/videoCard";

function CoursesHits({ hits }) {
	console.log(hits);
	return (
		<div className="searchrendergrid">
			{hits.map((hit) => {
				// return <SVideoCard key={hit.ObjectID} hit={hit}></SVideoCard>;
				// return <h1>{hit.courseTitle}</h1>;
				return (
					<VideoCard
						courseTitle={hit.title}
						imgSrc={hit.imgSrc}
						instructor={hit.instructor}
						rating={hit.rating}
						noOfStudents={"(" + hit.noOfStudents + ")"}
						price={"$" + hit.price}
					/>
				);
			})}
		</div>
	);
}

export default connectHits(CoursesHits);
