import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AppLayout from '../components/Layout/AppLayout';

class Contact extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppLayout
        location={this.props.location}
        title={'About'}>
        <h1>About Page</h1>
      </AppLayout>
    );
  }
}

export default Contact;
