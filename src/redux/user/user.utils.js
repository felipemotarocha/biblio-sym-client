import axios from "axios";

const REQUEST_URL = "http://localhost:5000/api/users";

export const getUserProfile = async () => {
	const jwt = localStorage.getItem("authToken");
	try {
		const response = await axios.get(`${REQUEST_URL}/me`, {
			headers: { Authorization: `Bearer ${jwt}` },
		});
		return response.data;
	} catch (err) {
		localStorage.removeItem("authToken");
		return err;
	}
};

export const fetchUserBooks = async () => {
	try {
		const response = await axios.get(`${REQUEST_URL}/my-books`, {
			headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
		});
		return response.data;
	} catch (err) {
		throw new Error("Something went wrong.");
	}
};
