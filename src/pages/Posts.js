import React, { Component } from 'react';
import PostsList from '../components/PostsList';

class Posts extends Component {
    render() {
        return (
            <>
              {
                  !this.props.children ?
                  <PostsList />
                  :
                  this.props.children
              }  
            </>
        );
    }
}

export default Posts;
