import ErrorActionTypes from "./error.types";

export const setError = (error) => ({
	type: ErrorActionTypes.SET_ERROR,
	error: error,
});

export const hideError = () => ({
	type: ErrorActionTypes.HIDE_ERROR,
});
