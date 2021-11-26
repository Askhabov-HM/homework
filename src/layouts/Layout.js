import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
        Container,
        Row,
        Col,
        Navbar,
        Nav,
    } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {
    Link,
} from "react-router";
import MenuItem from '../components/MenuItem';

const menuItems = [
    {
        id: 10,
        title: 'Home',
        href: '/'
    },
    {
        id: 40,
        title: 'Users',
        href: '/users'
    },
    {
        id: 20,
        title: 'Comments',
        href: '/comments'
    },
    {
        id: 30,
        title: 'Posts',
        href: '/posts'
    },
];

function isActive( path ){
    let location = window.location.pathname;
    if(location === path){
        return true;
    } else if(location.indexOf(path) !== -1 && path !== '/'){
        return true;
    }
}


class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="nav-link">
                                MySite
                            </Link>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            { menuItems.map( item => {
                                    return <MenuItem {...item} active={isActive(item.href)}/>
                                })
                            }
                        </Nav>
                    </Container>
                </Navbar>
                <Container>
                    <Row className="flex-column">
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


Layout.propTypes = {

};


export default Layout;
