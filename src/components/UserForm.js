import React, { Component } from 'react';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      country: '',
    };
  }

  handleOnChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.addUser(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <form>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit}>
              Create User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
