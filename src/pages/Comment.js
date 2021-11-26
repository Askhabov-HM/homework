import React, { Component } from 'react';
import axios from 'axios';
import CommentCard from '../components/Comment';

const URL = "https://jsonplaceholder.typicode.com/comments/"

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: null,
        }
    }
    
    render() {
        return (
            <>
                { this.state.comment && <CommentCard {...this.state.comment} />}
            </>
        );
    }

    componentDidMount(){
        axios.get(`${URL}${this.props.params.commentId}`)
        .then( response =>{
            this.setState({comment: response.data})
        })
    }
}

export default Comment;
