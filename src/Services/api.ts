import axios from "axios";
import { API_KEY } from "@env";

const config = {
	headers: { Authorization: `Bearer ${API_KEY}` },
};

const API = "https://sofit-mobile-challenge.herokuapp.com/expenses";

type apiGETProps = {
	params: string;
};

type apiPOSTProps = {
	objectToSave: object;
};

export async function apiGET(params: apiGETProps) {
	try {
		const response = await axios.get(API + params);
		return response.data;
	} catch (error) {
		return "";
	}
}

export async function apiPOST(params: apiPOSTProps) {
	try {
		const response = await axios.post(API, params, config);
	} catch (error) {
		return "";
	}
}
