import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import BookIcon from "@material-ui/icons/Book";
import AddIcon from "@material-ui/icons/Add";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { Container, ItemContainer, Item } from "./add-existent-book.styles";
import {
	selectAllBooks,
	selectAreBooksFetching,
} from "../../redux/book/book.selectors";
import { fetchAllBooksStart } from "../../redux/book/book.actions";
import {
	addExistentBookStart,
	addExistentBookFailure,
} from "../../redux/book/book.actions";

const AddExistentBook = ({ allBooks, dispatch, isLoading }) => {
	const [bookTitle, setBookTitle] = useState("");
	const [bookId, setBookId] = useState("");
	const [quantity, setQuantity] = useState("");

	useEffect(() => {
		dispatch(fetchAllBooksStart());
	}, [dispatch]);

	const handleSubmit = () => {
		if (bookId && quantity) {
			dispatch(addExistentBookStart({ id: bookId, quantity }));
			setBookTitle("");
			setBookId("");
			setQuantity("");
			return;
		}
		dispatch(addExistentBookFailure("Please fill out all the inputs."));
	};

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: blue[700],
			},
		},
	});

	return (
		<Container>
			<ThemeProvider theme={theme}>
				<ItemContainer>
					<Item isIcon={true}>
						<BookIcon />
					</Item>
					<Item>
						<Autocomplete
							id="genre"
							required
							value={bookTitle}
							onChange={(event, newValue) => {
								if (newValue) {
									setBookTitle(newValue.title);
									setBookId(newValue._id);
								} else {
									setBookTitle("");
									setBookId("");
								}
							}}
							loading={isLoading}
							loadingText="Loading..."
							options={allBooks ? allBooks : []}
							getOptionSelected={(option, value) => option.title === value}
							getOptionLabel={(book) =>
								book.title
									? book.title.charAt(0).toUpperCase() + book.title.slice(1)
									: book
							}
							renderInput={(params) => (
								<TextField {...params} label="Book" variant="outlined" />
							)}
							style={{ width: "100%" }}
						/>
					</Item>
				</ItemContainer>

				<ItemContainer>
					<Item isIcon={true}>
						<LibraryBooksIcon />
					</Item>
					<Item>
						<TextField
							id="quantity"
							type="number"
							label="Quantity to add"
							required
							value={quantity}
							onChange={({ target: { value } }) => setQuantity(parseInt(value))}
							style={{ width: "100%" }}
							variant="outlined"
						/>
					</Item>
				</ItemContainer>
				<ItemContainer>
					<Item>
						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<AddIcon />}
							style={{ width: "100%" }}
							onClick={handleSubmit}
							type="submit"
						>
							ADD
						</Button>
					</Item>
				</ItemContainer>
			</ThemeProvider>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	allBooks: selectAllBooks,
	isLoading: selectAreBooksFetching,
});

export default connect(mapStateToProps)(AddExistentBook);
