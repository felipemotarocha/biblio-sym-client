import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const AdminComponent = ({ currentUser, children }) => {
	const [isLoading, setLoading] = useState(true);
	const history = useHistory();
	useEffect(() => {
		if (currentUser) {
			if (!currentUser.isAdmin) {
				setLoading(false);
				history.push("/");
			}
			setLoading(false);
		}
		// eslint-disable-next-line
	}, [currentUser]);

	return <div>{isLoading ? "" : children}</div>;
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AdminComponent);
