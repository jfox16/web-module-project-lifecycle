
import React, { Component } from 'react';

class UsernameForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Enter a username...'
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <button>Find User</button>
      </form>
    );
  }
}

export default UsernameForm;