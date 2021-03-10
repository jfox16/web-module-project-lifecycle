
import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {

  render() {
    const user = this.props.user;
    console.log(user);
    if (!user) {
      return <></>
    }
    return (
      <div className='UserCard'>
        <img src={user.avatar_url} alt={user.name} className='profilePic' />
        <h2>{user.name || user.login}</h2>
        <a href={user.html_url}>{user.html_url}</a>
        <p>{user.bio}</p>
      </div>
    );
  }
}

export default UserCard;