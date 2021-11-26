import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentsList from '../components/CommentsList';



class Comments extends Component {
    render() {
        return<>
            { 
                !this.props.children ? 
                <CommentsList />
                :
                this.props.children
            }
        </>
    };
}


Comments.propTypes = {

};


export default Comments;
