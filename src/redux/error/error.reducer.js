import ErrorActionTypes from "./error.types";

const INITIAL_STATE = {
	error: null,
	isOpen: false,
};

const errorReducer = (state = INITIAL_STATE, action) => {
	if (action.error) return { ...state, error: action.error, isOpen: true };
	switch (action.type) {
		case ErrorActionTypes.HIDE_ERROR:
			return {
				...state,
				error: null,
				isOpen: false,
			};
		default:
			return state;
	}
};

export default errorReducer;
