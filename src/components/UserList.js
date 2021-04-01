import React, { Component } from 'react';
import UserItem from './UserItem';

export class UserList extends Component {
  render() {
    console.log('UsersList', this.props.users);
    return (
      <div>
        {this.props.users.map((user) => {
          return <UserItem user={user} />;
        })}
      </div>
    );
  }
}

export default UserList;
