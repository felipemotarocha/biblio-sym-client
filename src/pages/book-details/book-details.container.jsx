import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import BookDetails from "./book-details.component";

const BookDetailsWithLoading = LoadingSpinner(BookDetails);

const BookDetailsContainer = ({
    match: {
        params: { id },
    },
}) => {
    const [data, setData] = useState();
    const [isFetching, setLoading] = useState(true);

    useEffect(() => {
        fetchBook(id);
    }, [id]);

    const fetchBook = async (id) => {
        const REQUEST_URL = "http://localhost:5000/api/books";
        setLoading(true);
        const { data } = await axios.get(`${REQUEST_URL}/${id}`);
        setData(data);
        setLoading(false);
    };

    return <BookDetailsWithLoading isLoading={isFetching} book={data} />;
};

export default BookDetailsContainer;
