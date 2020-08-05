import React from 'react';
import Cookies from 'universal-cookie';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Router from 'next/router';
import { Form, Button, Card } from 'react-bootstrap';

import AuthLayout from '../components/Layout/AuthLayout';
const cookies = new Cookies();

const COOKIE_DOMAIN = {
  domain: '',
  path: '/'
};

class LoginPage extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameValid: false,
      passwordValid: false,   
      loading: false,
    };
  }

  componentDidMount = () => {
    if (cookies.get('token')) {    
      return Router.push('/');
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      [name + 'Valid']: value.length >= 1
    });
  };

  handleSubmit = (event) => {
    this.setState({ submitted: true });

    const {
      username,
      password,
      usernameValid,
      passwordValid
    } = this.state;

    if (usernameValid && passwordValid) {
      this.setState({ loading: true });
      const data = {
        username: this.state.username,
      };
     
      cookies.set('token', 'dummy_token_test', COOKIE_DOMAIN);
      localStorage.setItem('user', JSON.stringify(data));
      this.setState({ loading: false });
      Router.push('/');
    }
  };

  render() {
    return (
      <AuthLayout location={this.props.location}>
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form noValidate>
              <Form.Group controlId="loginFormUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder="Username"
                  required />
            
                 {(this.state.submitted && !this.state.usernameValid) && (
                    <div className="error">
                      Please enter username.
                    </div>
                  )}
              </Form.Group>

              <Form.Group controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required />
                  {(this.state.submitted && !this.state.passwordValid) && (
                    <div className="error">
                      Please enter password.
                    </div>
                  )}
              </Form.Group>

              <Button variant="primary"
                onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </AuthLayout>
    );
  }
}

export default LoginPage;
