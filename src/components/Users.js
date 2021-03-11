import React, { Component } from 'react';
import { connect } from 'react-redux';
// import App from '../App'
// add any needed imports here
class Users extends Component {

  render() {
    const usersList = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        <ul>
          Users!
          <ul>{usersList}</ul>
          <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log(state.users.length)
  return {
    users: state.users,
    userCount: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
