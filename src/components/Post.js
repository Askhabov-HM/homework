import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router'

class Post extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {body, title, id} = this.props;
        return (
            <Card className="col-3 m-3">
                <Card.Header>{title}</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-end">
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Link className="d-flex text-light" to={`/posts/${id}`}>
                        <Button className="flex-grow-1" variant="success">
                            More
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

Post.propTypes = {

}

export default Post;
