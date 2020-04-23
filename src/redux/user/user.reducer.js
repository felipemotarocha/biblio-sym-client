import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    userDropdownHidden: true
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case UserActionTypes.LOGOUT_USER:
            return {
                ...state,
                currentUser: null
            }
        case UserActionTypes.TOGGLE_USER_DROPDOWN_HIDDEN:
            return {
                ...state,
                userDropdownHidden: !state.userDropdownHidden
            }
        default:
            return state;
    }
};

export default userReducer;
