import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';

import AppLayout from '../components/Layout/AppLayout';

class Dashboard extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      submitted: false,
      
      data: [
        {name: 'name 1', age: 29, city: 'Singapore'},
        {name: 'name 2', age: 22, city: 'New York City'},
        {name: 'name 3', age: 56, city: 'London'},
        {name: 'name 4', age: 28, city: 'Tokyo'},
        {name: 'name 5', age: 65, city: 'Paris'},
      ]
    };
  }

  render() {
    return (
      <AppLayout
        location={this.props.location}
        title={'Dashboard'}>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            { this.state.data.map((user, userIdx)=> (
              <tr key={userIdx}>
                <td>{userIdx + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AppLayout>
    );
  }
}

export default Dashboard;
