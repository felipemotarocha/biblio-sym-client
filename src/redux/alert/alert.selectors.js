import { createSelector } from "reselect";

const selectAlert = (state) => state.alert;

export const selectError = createSelector(
	[selectAlert],
	(alert) => alert.error
);

export const selectErrorMessage = createSelector([selectError], (error) =>
	error ? error : null
);

export const selectAlertMessage = createSelector(
	[selectAlert],
	(alert) => alert.message
);

export const selectIsAlertOpen = createSelector(
	[selectAlert],
	(alert) => alert.isOpen
);
