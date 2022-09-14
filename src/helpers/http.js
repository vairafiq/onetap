import axios from "axios";

const restRequest = axios.create({
	baseURL: oneTap_CoreScriptData.apiEndpoint,
	headers: {
		"Content-type": "application/json",
		"X-WP-Nonce": oneTap_CoreScriptData.apiNonce,
	},
});

export { restRequest };