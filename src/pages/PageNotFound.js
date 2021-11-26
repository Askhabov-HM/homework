import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../components/PageNotFound';

class PageNotFound extends Component {
    render() {
        return (
           <ErrorPage />
        );
    }
}


PageNotFound.propTypes = {

};


export default PageNotFound;
