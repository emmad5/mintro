
import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from "../UserForm/UserForm"
import GroupSelection from "../GroupForm/GroupSelection"
import Profile from "../Profile/Profile"

const Homepage = ({ currentUser, logout, updateUser, createGroup, groups }) => {
  const personalProfile = () => {
  if (!currentUser.group_id) {
    return <GroupSelection currentUser={currentUser} updateUser={updateUser} createGroup={createGroup}/>
  } else if (!currentUser.name) {
    return <UserForm currentUser={currentUser} updateUser={updateUser} />
  } else  {
    return <div>
      <Profile currentUser={currentUser} />
    </div>
  }
}

  return (
    <div>
      <div className="flex justify-end"><button className="logout" onClick={logout}>Log Out</button></div>
      <h1 className="welcome-header">Welcome to Mintro</h1>
      {personalProfile()}
    </div>
  )
};


export default Homepage;