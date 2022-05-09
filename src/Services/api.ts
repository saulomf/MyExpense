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
	expense: {
		date: string;
		item: string;
		value: number;
		additionalInfo: { type: string };
	};
};

type apiDELETEProps = {
	params: string;
};

type apiPUTProps = {
	params: {
		id: string;
		expense: {
			date: string;
			item: string;
			value: number;
			additionalInfo: { type: string };
		};
	};
};

export async function apiGET({ params }: apiGETProps) {
	try {
		const response = await axios.get(API + params, config);
		return response.data;
	} catch (error) {
		return "error";
	}
}

export async function apiPOST(params: apiPOSTProps) {
	const { expense } = params;
	try {
		const response = await axios.post(API, expense, config);
		return response.data;
	} catch (error) {
		return "error";
	}
}

export async function apiDELETE({ params }: apiDELETEProps) {
	try {
		const response = await axios.delete(API + params, config);
		return response.data;
	} catch (error) {
		return "error";
	}
}

export async function apiPUT({ params }: apiPUTProps) {
	const { id, expense } = params;
	try {
		const response = await axios.put(API + "/" + id, expense, config);
		return response.data;
	} catch (error) {
		return "error";
	}
}
