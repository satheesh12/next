import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Cookies from 'universal-cookie';
import Router from 'next/router'

import NavBar from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Styles from './Layout.module.scss';

 
import { Container } from 'react-bootstrap';

const cookies = new Cookies();

class AppLayout extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node,
    title: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      noAuth: false,
    };
  }

  componentDidMount = () => {
    const currentUser = localStorage.getItem('user');
    if (
      cookies.get('token')
    ) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({ isLoaded: true, ...user });
    } else {
      this.setState({ isLoaded: true, noAuth: true });
      Router.push('/login');
    }
  };

  render() {
    if (this.state.noAuth) {
      return null;
    }
    return (
      <React.Fragment>
        { this.state.isLoaded && (
          <div className="main">
            <NavBar user={this.state.username} />
            <Container className={Styles.container}>
              <Header title={this.props.title || 'Untitled'}></Header>
              <div>
                {this.state.isLoaded && this.props.children}
              </div>
            </Container>
            <Footer />
          </div>
        )

        }
        
      </React.Fragment>
    );
  }
}
  
export default AppLayout;
