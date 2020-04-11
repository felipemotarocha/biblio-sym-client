import React from 'react';

const BookDetails = ({ match }) => {
    return (
        <div>
            <h1>book id is {match.params.id}</h1>
        </div>
    );
}

export default BookDetails;