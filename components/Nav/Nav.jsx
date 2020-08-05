import React from 'react';
import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import Styles from './Nav.module.scss';

const cookies = new Cookies();
const COOKIE_DOMAIN = {
  domain: '',
  path: '/'
};

class NavBar extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    user: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
    };
  }

  handleLogout = () => {
    cookies.remove('token', COOKIE_DOMAIN);
    Router.push('/login');
  }

  render() {
    return (
    <div>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="dark" variant="dark">
        <Link href="/"><Navbar.Brand>Test App</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Link href="/contact" passHref><Nav.Link>Contact</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          </Nav>

          <Nav>
            <Navbar.Text>
              Signed in as: <span>{this.state.user || 'Guest'}</span>
            </Navbar.Text>
            <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>       
      </Navbar>
    </div>
    )
  }
};



export default NavBar;
