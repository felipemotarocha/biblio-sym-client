import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../redux/user/user.actions";
import { getUserProfile } from "../../redux/user/user.utils";

const AuthenticatedComponent = ({ dispatch, children, history }) => {
	const getUser = async () => {
		try {
			const data = await getUserProfile();
			dispatch(loginUser(data));
		} catch (err) {
			history.push("/sign");
		}
	};
	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			history.push("/sign");
		} else {
			getUser();
		}
	}, []);
	return <div>{children}</div>;
};

export default connect()(withRouter(AuthenticatedComponent));
