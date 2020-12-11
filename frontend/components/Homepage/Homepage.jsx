
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
    return <div>
      <div>Please fill out this form to continue</div>
      <UserForm currentUser={currentUser} updateUser={updateUser} />
    </div>
  } else  {
    return <div>
      <Profile currentUser={currentUser} />
    </div>
  }
}

  return (
    <div>
      {personalProfile()}
      <div className="flex justify-end"><button className="logout" onClick={logout}>Log Out</button></div>
    </div>
  )
};


export default Homepage;