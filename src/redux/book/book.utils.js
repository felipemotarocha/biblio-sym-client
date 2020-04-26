import axios from 'axios'

export const fetchBooksByGenre = async () => {
    const REQUEST_URL = "http://localhost:5000/api/genres";
    const response = await axios.get(`${REQUEST_URL}/books`);
    return response.data;
};