// loadData.js
const Typesense = require("typesense");
module.exports = (async () => {
	const TYPESENSE_CONFIG = {
		nodes: [
			{
				host: "localhost",
				port: "8108",
				protocol: "http"
			}
		],
		apiKey: "xyz"
	};
	console.log("Config: ", TYPESENSE_CONFIG);
	const typesense = new Typesense.Client(TYPESENSE_CONFIG);
	const schema = {
		name: "courses",
		num_documents: 0,
		fields: [
			{
				name: "courseTitle",
				type: "string",
				facet: false
			},
			{
				name: "title",
				type: "string[]",
				facet: true
			},
			{
				name: "title.lvl0",
				type: "string[]",
				facet: true,
				optional: true
			},
			{
				name: "title.lvl1",
				type: "string[]",
				facet: true,
				optional: true
			},
			{
				name: "title.lvl2",
				type: "string[]",
				facet: true,
				optional: true
			},
			{
				name: "dateuploaded",
				type: "string",
				facet: true
			},
			{
				name: "rating",
				type: "float",
				facet: true
			},
			{
				name: "price",
				type: "float",
				facet: true
			},
			{
				name: "noOfStudents",
				type: "int32",
				facet: true
			},
			{
				name: "imgSrc",
				type: "string",
				facet: true
			},
			{
				name: "instructor",
				type: "string",
				facet: true
			}
		],

		default_sorting_field: "noOfStudents"
	};

	const courses = require("./data/mockdata.json");
	try {
		const collection = await typesense.collections("courses").retrieve();
		console.log("Found existing collection of courses");
		console.log(JSON.stringify(collection, null, 2));

		if (collection.num_documents !== courses.length) {
			console.log("Collection has diff number of docs than data");
			console.log("Deleting collection");
			await typesense.collections("courses").delete();
		}
	} catch (err) {
		console.error(err);
	}
	console.log("Creating schema...");
	console.log(JSON.stringify(schema, null, 2));
	await typesense.collections().create(schema);
	console.log("Populating supercourses collection data...");
	try {
		const returnData = await typesense
			.collections("courses")
			.documents()
			.import(courses);

		console.log("Return data: ", returnData);
	} catch (err) {
		console.error(err);
	}
})();
