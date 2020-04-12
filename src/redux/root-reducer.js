import { combineReducers } from "redux";

import genreReducer from "./genre/genre.reducer";
import backpackReducer from './backpack/backpack.reducer';

export default combineReducers({
    genre: genreReducer,
    backpack: backpackReducer
});
