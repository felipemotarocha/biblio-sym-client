import React from "react";

import { Container, Image, Title, Author } from "./user-book.styles";

const UserBook = ({ book: { title, author, image } }) => {
	return (
		<Container>
			<Image src={image} />
			<Title>{title}</Title>
			<Author>{author}</Author>
		</Container>
	);
};

export default UserBook;
