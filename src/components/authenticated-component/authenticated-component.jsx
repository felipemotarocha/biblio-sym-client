import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "../../redux/user/user.actions";
import { selectUserError } from "../../redux/user/user.selectors";

const AuthenticatedComponent = ({ dispatch, children, history, userError }) => {
	useEffect(() => {
		if (!localStorage.getItem("authToken") || userError) {
			history.push("/sign");
		} else {
			dispatch(checkUserSession());
		}
	}, []);

	return <div>{children}</div>;
};

const mapStateToProps = createStructuredSelector({
	userError: selectUserError,
});

export default connect(mapStateToProps)(withRouter(AuthenticatedComponent));
