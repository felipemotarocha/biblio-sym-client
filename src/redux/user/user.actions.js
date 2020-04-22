import axios from "axios";
import UserActionTypes from "./user.types";

const REQUEST_URL = "http://localhost:5000/api/users";

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
            const response = await axios.post(`${REQUEST_URL}/login`, user);
            const data = response.data;
            localStorage.setItem("authToken", data.token);
            dispatch(loginUser(data.user));
        } catch (err) {
            alert("Algo de errado aconteceu, tente novamente.");
        }
    };
};

export const loginUser = (user) => ({
    type: UserActionTypes.LOGIN_USER,
    payload: user,
});
