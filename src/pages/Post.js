import React, { Component } from 'react';
import axios from 'axios';
import PostCard from '../components/Post';

const URL = 'https://jsonplaceholder.typicode.com/posts/';

class Post extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            post: null,
        }
    }
    
    render() {
        return <>   
                { this.state.post && <PostCard {...this.state.post} />}
            </>
    }

    componentDidMount(){
        axios.get(`${URL}${this.props.params.postId}`)
        .then( response => {
            this.setState({post: response.data})
        })
    }
}

export default Post;
