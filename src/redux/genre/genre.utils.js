import axios from "axios";

const REQUEST_URL = "http://localhost:5000/api/genres";

export const fetchGenres = async () => {
    const response = await axios.get(REQUEST_URL);
    const data = response.data;

    return data.map(({ _id, title }) => {
        return { id: _id, title };
    });
};

export const fetchBooksByGenre = async () => {
    const response = await axios.get(`${REQUEST_URL}/books`);
    return response.data;
};
