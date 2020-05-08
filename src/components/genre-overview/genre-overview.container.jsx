import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectAreBooksFetching } from '../../redux/book/book.selectors';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import GenreOverview from './genre-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectAreBooksFetching
});

const GenreOverviewContainer = compose(
    connect(mapStateToProps),
    LoadingSpinner,
)(GenreOverview);

export default GenreOverviewContainer;
