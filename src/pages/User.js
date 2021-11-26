import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import UserCard from '../components/User';

const URL = 'https://jsonplaceholder.typicode.com/users/';

class User extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
        }; 
    }
    
    render() {
        return (
            <>
                {this.state.user && <UserCard {...this.state.user}/>} 
            </>
        );
    }

    componentDidMount(){
        axios.get(`${URL}${this.props.params.userId}`).
        then( response => {
            this.setState({user: response.data})
        })
    }
}


User.propTypes = {

};


export default User;
