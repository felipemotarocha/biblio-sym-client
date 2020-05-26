import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

import { Container, Headline, Options, Item } from "./add-book.styles";

import AddNewBook from "../add-new-book/add-new-book.component";
import AddExistentBook from "../add-existent-book/add-existent-book.component";

const BlueRadio = withStyles({
	root: {
		"&$checked": {
			color: blue[700],
		},
	},
	checked: {},
})((props) => <Radio color="default" {...props} />);

const AddBook = () => {
	const [value, setValue] = useState("new");

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<Container>
			<Headline>Add Book</Headline>
			<RadioGroup name="options" value={value} onChange={handleChange}>
				<Options>
					<FormControlLabel
						value="new"
						control={<BlueRadio />}
						label="New book"
					/>
					<FormControlLabel
						value="existent"
						control={<BlueRadio />}
						label="Existent book"
					/>
				</Options>
			</RadioGroup>
			<Item>{value === "new" ? <AddNewBook /> : <AddExistentBook />}</Item>
		</Container>
	);
};

export default AddBook;
