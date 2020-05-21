import { createSelector } from "reselect";

const selectErrorState = (state) => state.error;

export const selectError = createSelector(
	[selectErrorState],
	(error) => error.error
);

export const selectErrorMessage = createSelector([selectError], (error) =>
	error ? error.data : null
);

export const selectIsErrorOpen = createSelector(
	[selectErrorState],
	(error) => error.isOpen
);
