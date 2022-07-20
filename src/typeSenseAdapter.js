import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

let TYPESENSE_SERVER_CONFIG = {
	nodes: [
		{
			host: "localhost",
			port: "8108",
			protocol: "http"
		}
	],
	apiKey: "xyz",
	connectionTimeoutSeconds: 1,
	numRetries: 8
};

export const typesenseAdaptor = new TypesenseInstantsearchAdapter({
	server: TYPESENSE_SERVER_CONFIG,
	additionalSearchParameters: {
		query_by: "courseTitle,title,instructor",
		query_by_weights: "4,2,1",
		num_typos: 4,
		typo_tokens_threshold: 1
	}
});


export const searchClient = typesenseAdaptor.searchClient