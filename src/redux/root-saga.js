import { all, call } from 'redux-saga/effects';

import { bookSagas } from './book/book.sagas';

export default function* rootSaga() {
    yield all([
        call(bookSagas)
    ]);
};
