import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import User from './User';

const URL = 'https://jsonplaceholder.typicode.com/users';

class Userslist extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <Row>
                {this.state.users.map( user => {
                    return <User {...user}/>
                })}
            </Row>
        );
    }

    componentDidMount(){
        axios.get(URL).
        then( response => {
            this.setState({users: response.data})
        })
    }
}

export default Userslist;
