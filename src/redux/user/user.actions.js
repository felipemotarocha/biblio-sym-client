import axios from "axios";
import UserActionTypes from "./user.types";

const REQUEST_URL = "http://localhost:5000/api/users";

// Authentication
export const userPostFetch = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(REQUEST_URL, user);
			const data = response.data;
			console.log(data);
			localStorage.setItem("authToken", data.token);
			dispatch(loginUser(data.user));
		} catch (err) {
			const errors = err.response.data.errors;
			Object.entries(errors).forEach((error) => {
				alert(error[1].message);
			});
		}
	};
};

export const userLoginFetch = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${REQUEST_URL}/sign-in`, user);
			const data = response.data;
			localStorage.setItem("authToken", data.token);
			dispatch(loginUser(data.user));
		} catch (err) {
			throw new Error("Something went wrong. Check the data and try again.");
		}
	};
};

export const userSignOutFetch = () => {
	return async (dispatch) => {
		try {
			const jwt = localStorage.getItem("authToken");
			await axios.post(
				`${REQUEST_URL}/sign-out`,
				{},
				{
					headers: { Authorization: `Bearer ${jwt}` },
				}
			);
			dispatch(logoutUser());
			localStorage.removeItem("authToken");
		} catch (err) {
			throw new Error("Something went wrong.");
		}
	};
};

// Google OAuth
export const signInWithGoogleFetch = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${REQUEST_URL}/oauth/google`, user);
			const data = response.data;
			localStorage.setItem("authToken", data.token);
			dispatch(loginUser(data.user));
		} catch (err) {
			throw new Error("Something went wrong. Check the data and try again.");
		}
	};
};

export const loginUser = (user) => ({
	type: UserActionTypes.LOGIN_USER,
	payload: user,
});

export const logoutUser = () => ({
	type: UserActionTypes.LOGOUT_USER,
});

export const toggleUserDropdownHidden = () => ({
	type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN,
});

// Add Books
export const addUserBooksFetch = (books) => {
	return async (dispatch) => {
		try {
			const bookIds = books.map((book) => book._id);
			await axios.post(
				`${REQUEST_URL}/add-books`,
				{ bookIds },
				{ headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
			);
			dispatch(addUserBooks(bookIds));
		} catch (err) {
			throw new Error("Something went wrong.");
		}
	};
};

export const addUserBooks = (bookIds) => ({
	type: UserActionTypes.ADD_BOOKS,
	payload: bookIds,
});