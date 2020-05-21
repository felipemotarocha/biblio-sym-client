import { combineReducers } from "redux";

import genreReducer from "./genre/genre.reducer";
import backpackReducer from "./backpack/backpack.reducer";
import userReducer from "./user/user.reducer";
import bookReducer from "./book/book.reducer";
import errorReducer from "./error/error.reducer";

export default combineReducers({
	user: userReducer,
	genre: genreReducer,
	backpack: backpackReducer,
	book: bookReducer,
	error: errorReducer,
});
