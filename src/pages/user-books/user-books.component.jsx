import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Header, Books } from "./user-books.styles";
import { selectCurrentUserBooks } from "../../redux/user/user.selectors";
import { fetchUserBooks } from "../../redux/user/user.utils";

import UserBook from "../../components/user-book/user-book.component";

const UserBooks = ({ currentUserBooks }) => {
	const [books, setBooks] = useState(null);
	useEffect(() => {
		fetchUserBooks().then((data) => setBooks(data));
	}, []);
	return (
		<Container>
			<Header>
				<div>Book</div>
				<div>Title</div>
				<div>Author</div>
			</Header>
			<Books>{books ? books.map((book, index) => <UserBook key={index} book={book} />) : "Loading..."}</Books>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUserBooks: selectCurrentUserBooks,
});

export default connect(mapStateToProps)(UserBooks);
