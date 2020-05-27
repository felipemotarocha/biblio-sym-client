import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BookIcon from "@material-ui/icons/Book";
import ImageIcon from "@material-ui/icons/Image";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import PersonIcon from "@material-ui/icons/Person";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import { Container, ItemContainer, Item } from "./add-new-book.styles";
import {
	selectGenres,
	selectIsLoading,
} from "../../redux/genre/genre.selectors";
import { fetchGenresStart } from "../../redux/genre/genre.actions";
import {
	addNewBookStart,
	addNewBookFailure,
} from "../../redux/book/book.actions";
import { useEffect } from "react";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[700],
		},
	},
});

const AddBook = ({ genres, dispatch, isLoading }) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [genreTitle, setGenreTitle] = useState("");
	const [genreId, setGenreId] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [availableForLoan, setAvailableForLoan] = useState("");

	useEffect(() => {
		dispatch(fetchGenresStart());
	}, [dispatch]);

	const handleSubmit = () => {
		if (title && author && genreId && imageUrl && availableForLoan) {
			dispatch(
				addNewBookStart({
					title,
					author,
					genre: genreId,
					imageUrl,
					availableForLoan,
				})
			);
			setTitle("");
			setAuthor("");
			setGenreTitle("");
			setGenreId("");
			setImageUrl("");
			setAvailableForLoan("");
			return;
		}
		dispatch(addNewBookFailure("Please fill out all the inputs."));
	};

	return (
		<Container>
			<ThemeProvider theme={theme}>
				<ItemContainer>
					<Item isIcon={true}>
						<BookIcon />
					</Item>
					<Item>
						<TextField
							id="title"
							label="Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							style={{ width: "100%" }}
							variant="outlined"
							required
						/>
					</Item>
				</ItemContainer>

				<ItemContainer>
					<Item isIcon={true}>
						<PersonIcon />
					</Item>
					<Item>
						<TextField
							value={author}
							id="author"
							label="Author"
							onChange={(e) => setAuthor(e.target.value)}
							style={{ width: "100%" }}
							variant="outlined"
							required
						/>
					</Item>
				</ItemContainer>

				<ItemContainer>
					<Item isIcon={true}>
						<BookmarkIcon />
					</Item>
					<Item>
						<Autocomplete
							value={genreTitle}
							id="genre"
							onChange={(event, newValue) => {
								if (newValue) {
									setGenreTitle(
										newValue.title.charAt(0).toUpperCase() +
											newValue.title.slice(1)
									);
									setGenreId(newValue._id);
								} else {
									setGenreTitle("");
									setGenreId("");
								}
							}}
							loading={isLoading}
							loadingText="Loading..."
							options={genres ? genres : []}
							getOptionSelected={(option, value) =>
								option.title.charAt(0).toUpperCase() + option.title.slice(1) ===
								value
							}
							getOptionLabel={(genre) =>
								genre.title
									? genre.title.charAt(0).toUpperCase() + genre.title.slice(1)
									: genre
							}
							renderInput={(params) => (
								<TextField {...params} label="Genre" variant="outlined" />
							)}
							style={{ width: "100%" }}
							required
						/>
					</Item>
				</ItemContainer>

				<ItemContainer>
					<Item isIcon={true}>
						<ImageIcon />
					</Item>
					<Item>
						<TextField
							value={imageUrl}
							id="imageUrl"
							label="Cover Image URL"
							onChange={(e) => setImageUrl(e.target.value)}
							style={{ width: "100%" }}
							variant="outlined"
							required
						/>
					</Item>
				</ItemContainer>

				<ItemContainer>
					<Item isIcon={true}>
						<LibraryBooksIcon />
					</Item>
					<Item>
						<TextField
							type="number"
							id="availableForLoan"
							label="Quantity available for loan"
							value={availableForLoan}
							onChange={({ target: { value } }) =>
								setAvailableForLoan(parseInt(value))
							}
							style={{ width: "100%" }}
							variant="outlined"
							required
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
	genres: selectGenres,
	isLoading: selectIsLoading,
});

export default connect(mapStateToProps)(AddBook);
