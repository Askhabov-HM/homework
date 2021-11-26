import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router'


class Comment extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { body, email, name, id } = this.props;
        return (
            <Card className="col-3 m-3">
                <Card.Header>{name}</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Title>{email}</Card.Title>
                    <Card.Text>
                    {body}
                    </Card.Text>
                    <Link className="d-flex text-light" to={`/comments/${id}`}>
                        <Button className="flex-grow-1" variant="primary">
                            Read
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}


Comment.propTypes = {

};


export default Comment;
