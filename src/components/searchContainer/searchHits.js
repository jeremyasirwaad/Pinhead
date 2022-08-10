import React, { useEffect, useState } from "react";
import { connectHits } from "react-instantsearch-dom";
import SVideoCard from "../Search/svideoCard";
import VideoCard from "../homeContent/recommendations/videoCard";

function CoursesHits({ hits }) {
	const [coursesfromstripe, setCoursesfromstripe] = useState([]);
	// console.log(hits);
	useEffect(() => {
		getcourses();
	}, []);

	const getcourses = async () => {
		const data = await fetch("http://localhost:1337/api/courses")
			.then((res) => res.json())
			.then((res) => {
				setCoursesfromstripe(res.data);
				console.log(res.data);
			});
	};
	return (
		<div className="searchrendergrid">
			{/* {hits.map((hit) => {
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
			})} */}
			{coursesfromstripe.map((e) => {
				return (
					<VideoCard
						courseTitle={e.attributes.courseTitle}
						imgSrc={e.attributes.imgSrc}
						instructor={e.attributes.instructor}
						rating={e.attributes.rating}
						noOfStudents={"(" + e.attributes.noOfStudents + ")"}
						price={"$" + e.attributes.price}
						id={e.id}
					></VideoCard>
				);
			})}
		</div>
	);
}

export default connectHits(CoursesHits);
