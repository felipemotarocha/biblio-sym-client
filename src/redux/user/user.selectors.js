import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectUserDropdownHidden = createSelector([selectUser], (user) => user.userDropdownHidden);

export const selectCurrentUserBooks = createSelector([selectCurrentUser], (currentUser) =>
	currentUser ? currentUser.books : null
);
