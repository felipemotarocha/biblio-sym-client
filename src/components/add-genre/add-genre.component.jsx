import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { Container, Headline, ItemContainer, Item } from "./add-genre.styles";
import {
	addGenreStart,
	addGenreFailure,
} from "../../redux/genre/genre.actions";

const AddExistentBook = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (title) {
			dispatch(addGenreStart({ title }));
			setTitle("");
			return;
		}
		dispatch(addGenreFailure("Please fill out all the inputs."));
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
			<Headline>ADD GENRE</Headline>
			<ThemeProvider theme={theme}>
				<ItemContainer>
					<Item isIcon={true}>
						<BookmarkIcon />
					</Item>
					<Item>
						<TextField
							id="add-genre"
							type="text"
							label="Genre title"
							required
							value={title}
							onChange={({ target: { value } }) => setTitle(value)}
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

export default AddExistentBook;
