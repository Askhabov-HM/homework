import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router'


class User extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { username, email, name, phone, website, id } = this.props;
        return (
            <Card className="col-3 m-3">
                <Card.Header>{username}</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{phone}</p>
                        <p>{email}</p>
                        <p>{website}</p>
                    </Card.Text>
                    <Link className="d-flex text-light" to={`/users/${id}`}>
                        <Button className="flex-grow-1" variant="warning">
                            About
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}


User.propTypes = {

};


export default User;
