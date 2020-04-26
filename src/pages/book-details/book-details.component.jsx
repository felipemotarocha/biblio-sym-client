import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	BookDetailsContainer,
	BookImage,
	BookContent,
	Header,
	Title,
	Author,
	Content,
	ContentHeadline,
	Description,
	Footer,
	Button,
	LoanQuantity,
} from "./book-details.styles";

import { addBook } from "../../redux/backpack/backpack.actions";
import { selectBackpackBooks } from "../../redux/backpack/backpack.selectors";
import { selectCurrentUser, selectCurrentUserBooks } from "../../redux/user/user.selectors";
import { isBookInBackpack } from "../../redux/backpack/backpack.utils";

const BookDetails = ({
	match: {
		params: { id },
	},
	backpackBooks,
	dispatch,
	currentUser,
	currentUserBooks,
}) => {
	const [book, setBook] = useState("");

	const isBookAlreadyLoanForTheUser = () => {
		if (currentUser) {
			const foundBook = currentUserBooks.find((book) => book.bookId === id);
			return foundBook ? true : false;
		} else {
			return false;
		}
	};

	const isBookAvailableForLoan = (book) => {
		console.log(book);
		return book.availableForLoan > 0;
	};

	useEffect(() => {
		const fetchBook = async () => {
			const REQUEST_URL = "http://localhost:5000/api/books";
			const response = await axios.get(`${REQUEST_URL}/${id}`);
			setBook(response.data);
		};

		fetchBook();
	}, [id]);

	const { image, title, author, availableForLoan } = book;
	return (
		<div>
			<BookDetailsContainer>
				<BookImage source={image} />
				<BookContent>
					<Header>
						<Title>{title}</Title>
						<Author>by {author}</Author>
					</Header>
					<Content>
						<ContentHeadline>About this book</ContentHeadline>
						<Description>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, felis rhoncus venenatis ornare,
							nulla lacus efficitur risus, et varius nunc massa in nibh. Nam quis lacinia sem. Curabitur dolor nisi,
							tristique vel nisi in, molestie pretium tellus. In vulputate dolor mi, eu hendrerit mi condimentum ut. In
							vel placerat velit. Integer eu ligula in nisi blandit fermentum at sed mi. Nam porttitor justo eu nisl
							ultricies scelerisque.
						</Description>
					</Content>
					<Footer>
						<LoanQuantity>Available quantity for loan: {availableForLoan}</LoanQuantity>
						{isBookAvailableForLoan(book) ? (
							isBookAlreadyLoanForTheUser() === false ? (
								book ? (
									isBookInBackpack(backpackBooks, id) === undefined ? (
										<Button handleClick={() => dispatch(addBook(book))}>Add to backpack</Button>
									) : (
										<ContentHeadline>this book is in your backpack.</ContentHeadline>
									)
								) : (
									""
								)
							) : (
								<ContentHeadline>You already have this book on loan.</ContentHeadline>
							)
						) : (
							<ContentHeadline>This book is not available for loan. Try to come back later.</ContentHeadline>
						)}
					</Footer>
				</BookContent>
			</BookDetailsContainer>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	backpackBooks: selectBackpackBooks,
	currentUser: selectCurrentUser,
	currentUserBooks: selectCurrentUserBooks,
});

export default connect(mapStateToProps)(BookDetails);
