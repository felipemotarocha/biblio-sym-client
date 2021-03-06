import UserActionTypes from "./user.types";

// SIGN UP
export const signUpUserStart = (user) => ({
	type: UserActionTypes.SIGN_UP_USER_START,
	payload: user,
});

export const signUpUserSuccess = (user) => ({
	type: UserActionTypes.SIGN_UP_USER_SUCCESS,
	payload: user,
});

export const singUpUserFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_USER_FAILURE,
	error: error,
});

// SIGN IN WITH EMAIL
export const signInWithEmailStart = (user) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: user,
});

// SIGN IN WITH GOOGLE
export const signInWithGoogleStart = (user) => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
	payload: user,
});

// SIGN IN OVERALL
export const signInUserSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_USER_SUCCESS,
	payload: user,
});

export const signInUserFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_USER_FAILURE,
	error: error,
});

// SIGN OUT
export const signOutUserStart = () => ({
	type: UserActionTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_USER_SUCCESS,
});

export const signOutUserFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_USER_FAILURE,
	error: error,
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

export const toggleUserDropdownHidden = () => ({
	type: UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN,
});
