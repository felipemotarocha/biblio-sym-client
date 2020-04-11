import { combineReducers } from "redux";

import genreReducer from "./genre/genre.reducer";

export default combineReducers({
    genre: genreReducer,
});
