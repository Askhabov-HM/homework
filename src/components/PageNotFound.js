import React, { Component } from 'react';
import { Link } from 'react-router';
import { Alert } from 'react-bootstrap';

class ErrorPage extends Component {
    render() {
        return (
            <Alert variant='danger'>
                Page Not Found <br/>
                <Alert.Link>
                    <Link to="/">
                       Go to home page
                    </Link>
                </Alert.Link>. 
            </Alert>
        );
    }
}

export default ErrorPage;
