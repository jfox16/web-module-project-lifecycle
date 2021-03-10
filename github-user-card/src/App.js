
import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import UserCard from 'components/UserCard';
import UsernameForm from 'components/UsernameForm';
import getGitHubUser from 'functions/getGitHubUser';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      errorMessage: '',
      followers: [],
    }
  }

  componentDidMount() {
    const lastUsername = window.localStorage.getItem('username');
    if (lastUsername) {
      this.searchUser(lastUsername);
    }
  }

  searchUser = async (username) => {
    try {
      const user = await getGitHubUser(username)
        .then(res => res.data);
      const followers = await axios.get(user.followers_url)
        .then(res => res.data);
      this.setState({
        user: user,
        followers: followers,
        error: '',
      });
    }
    catch(err) {
      this.setState({
        errorMessage: err?.response?.statusText
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <UsernameForm onSubmit={this.searchUser} />
        <UserCard user={this.state.user} />
        {this.state.errorMessage && <p>Error: {this.state.errorMessage}</p>}
        {this.state.followers?.map(follower => (
          <UserCard user={follower} key={follower.id} />
        ))}
      </div>
    );
  }
}

export default App;
