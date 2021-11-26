import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import Comment from './Comment';
import { Row } from 'react-bootstrap';

const URL = 'https://jsonplaceholder.typicode.com/comments';

class CommentsList extends Component {
    constructor(props){
        super(props);

        this.state = {
            comments: [],
        }
    }
    render() {
        return <Row>
              {this.state.comments.map( (comment, index) => {
                return (
                    index < 20 ?
                    <Comment {...comment} />
                    :
                    null
                )
              })} 
            </Row>
    }

    componentDidMount(){
        axios.get(URL)
        .then( response => {
            this.setState({comments: response.data});
        });
    };
}


CommentsList.propTypes = {
   
};


export default CommentsList;
