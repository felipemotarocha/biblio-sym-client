import { takeLatest, all, put, call } from "redux-saga/effects";
import axios from "axios";

import UserActionTypes from "./user.types";
import {
	signUpUserSuccess,
	singUpUserFailure,
	signInUserSuccess,
	signInUserFailure,
	signOutUserSuccess,
	signOutUserFailure,
} from "./user.actions";

const REQUEST_URL = "http://localhost:5000/api/users";

function* signUp({ payload }) {
	try {
		const {
			data: { token, user },
		} = yield axios.post(REQUEST_URL, payload.user);
		localStorage.setItem("authToken", token);
		yield put(signUpUserSuccess(user));
	} catch (error) {
		yield put(singUpUserFailure(error));
	}
}

function* signInWithEmail({ payload }) {
	try {
		const {
			data: { token, user },
		} = yield axios.post(`${REQUEST_URL}/sign-in`, payload.user);
		yield localStorage.setItem("authToken", token);
		yield put(signInUserSuccess(user));
	} catch (error) {
		yield put(signInUserFailure(error));
	}
}

function* signInWithGoogle({ payload }) {
	console.log(payload);
	try {
		const {
			data: { token, user },
		} = yield axios.post(`${REQUEST_URL}/oauth/google`, payload.user);
		localStorage.setItem("authToken", token);
		yield put(signInUserSuccess(user));
	} catch (error) {
		yield put(signInUserFailure(error));
	}
}

export function* signOut() {
	try {
		const authToken = localStorage.getItem("authToken");
		yield axios.post(
			`${REQUEST_URL}/sign-out`,
			{},
			{
				headers: { Authorization: `Bearer ${authToken}` },
			}
		);
		localStorage.removeItem("authToken");
		yield put(signOutUserSuccess());
	} catch (error) {
		yield put(signOutUserFailure(error));
	}
}

export function* checkUserSession() {
	try {
		const authToken = localStorage.getItem("authToken");
		const { data } = yield axios.get(`${REQUEST_URL}/me`, {
			headers: { Authorization: `Bearer ${authToken}` },
		});
		yield put(signInUserSuccess(data));
	} catch (error) {
		localStorage.removeItem("authToken");
		yield put(signInUserFailure(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* onSignUpUserStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_USER_START, signUp);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutUserStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_USER_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onEmailSignInStart),
		call(onGoogleSignInStart),
		call(onSignOutUserStart),
		call(onSignUpUserStart),
		call(onCheckUserSession),
	]);
}
