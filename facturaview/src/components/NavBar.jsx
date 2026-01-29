import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {
    return (

        <Nav activeKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/uploadCheck">Upload</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/searchpersons">Search Persons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
