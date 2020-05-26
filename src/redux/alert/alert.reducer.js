import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
	error: null,
	message: null,
	isOpen: false,
};

const alertReducer = (state = INITIAL_STATE, action) => {
	if (action.error)
		return { ...state, error: action.error, message: null, isOpen: true };
	if (action.alertMessage)
		return {
			...state,
			message: action.alertMessage,
			error: null,
			isOpen: true,
		};
	switch (action.type) {
		case AlertActionTypes.HIDE_ERROR_OR_MESSAGE:
			return {
				...state,
				error: null,
				message: null,
				isOpen: false,
			};
		default:
			return state;
	}
};

export default alertReducer;
