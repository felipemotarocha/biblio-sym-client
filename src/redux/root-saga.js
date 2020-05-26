import { all, call } from "redux-saga/effects";

import { bookSagas } from "./book/book.sagas";
import { userSagas } from "./user/user.sagas";
import { genreSagas } from "./genre/genre.sagas";

export default function* rootSaga() {
	yield all([call(bookSagas), call(userSagas), call(genreSagas)]);
}
