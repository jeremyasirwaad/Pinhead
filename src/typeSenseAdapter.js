import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

let TYPESENSE_SERVER_CONFIG = {
	nodes: [
		{
			// host: "localhost",
			host: "54.67.113.46",
			port: "443",
			protocol: "http"
		}
	],
	apiKey: "xyz",
	connectionTimeoutSeconds: 5,
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

export const searchClient = typesenseAdaptor.searchClient;
