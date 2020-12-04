
import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from "../UserForm/UserForm"

const Profile = ({ currentUser, logout, updateUser }) => {
  console.log(currentUser, updateUser)
  const personalProfile = () => (
    <div>
      <h2>Hi, {currentUser.name || currentUser.email}!</h2>
      {currentUser.name && 
      <div>
        <div>LinkedIn: {currentUser.linked_in}</div>
        <div>DOB: {currentUser.birthdate}</div>
      </div>}
      {!currentUser.name && <div><div>Please fill out this form to continue</div>
      <UserForm currentUser={currentUser} updateUser={updateUser}/></div>}
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return personalProfile()
};


export default Profile;