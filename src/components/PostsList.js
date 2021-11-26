import React, { Component } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Post from './Post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

class Postslist extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
        };
    }
    
    render() {
        return <Row>
                {this.state.posts.map( (post, index) => {
                    return (
                        index < 30 ?
                        <Post {...post} />
                        :
                        null
                    )
                })}
            </Row>
    }

    componentDidMount(){
        axios.get(URL)
        .then( response => {
            this.setState({posts: response.data})
        })
    }
}

export default Postslist;
