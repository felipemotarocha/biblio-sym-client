import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Container, Header, Books } from "./user-books.styles";
import { fetchUserBooks } from "../../redux/user/user.utils";

import UserBook from "../../components/user-book/user-book.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
const BooksWithLoading = LoadingSpinner(Books);

const UserBooks = () => {
	const [books, setBooks] = useState(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetchUserBooks().then((data) => {
			setBooks(data);
			setLoading(false);
		});
	}, []);
	return (
		<Container>
			<Header>
				<div>Book</div>
				<div>Title</div>
				<div>Author</div>
			</Header>
			<BooksWithLoading isLoading={isLoading}>
				{books ? books.map((book, index) => <UserBook key={index} book={book} />) : null}
			</BooksWithLoading>
		</Container>
	);
};

export default connect()(UserBooks);
