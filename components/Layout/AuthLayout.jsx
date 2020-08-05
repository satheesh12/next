import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';

import Styles from './Layout.module.scss';

class AuthLayout extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.node
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-5" fluid>
          <Row className="justify-content-md-center">
            <Col sm="8" md="6" lg="4">
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default AuthLayout;
