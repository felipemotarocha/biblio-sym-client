import UserActionTypes from "./user.types";
import BookActionTypes from "../book/book.types";

const INITIAL_STATE = {
	isLoading: null,
	currentUser: null,
	userDropdownHidden: true,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SIGN_UP_USER_SUCCESS:
		case UserActionTypes.SIGN_IN_USER_SUCCESS: {
			return {
				...state,
				currentUser: action.payload,
				error: null,
				isLoading: false,
			};
		}
		case UserActionTypes.SIGN_OUT_USER_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
				isLoading: false,
			};
		case UserActionTypes.SIGN_UP_USER_FAILURE:
		case UserActionTypes.SIGN_IN_USER_FAILURE:
		case UserActionTypes.SIGN_OUT_USER_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		case UserActionTypes.CHECK_USER_SESSION:
			return {
				...state,
				isLoading: true,
			};
		case UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN:
			return {
				...state,
				userDropdownHidden: !state.userDropdownHidden,
			};
		case BookActionTypes.BOOK_LOAN_SUCCESS:
			return {
				...state,
				currentUser: { ...state.currentUser, books: action.payload },
			};
		default:
			return state;
	}
};

export default userReducer;
