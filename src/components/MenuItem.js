import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

class MenuItem extends Component {
    render() {
        return <Nav.Link key={this.props.id}>
            <Link className={this.props.active ? 'nav-link active' : 'nav-link'} to={this.props.href}>
                {this.props.title}
            </Link>
        </Nav.Link>
    }
}

export default MenuItem;
