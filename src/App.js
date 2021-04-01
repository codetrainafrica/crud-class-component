import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  addUser = (user) => {
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    console.log('App.js', this.state);
    return (
      <div>
        <div className="col-md-6">
          <UserForm addUser={this.addUser} />
        </div>
        <div className="col-md-6">
          <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
