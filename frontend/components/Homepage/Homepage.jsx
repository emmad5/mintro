
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserForm from "../UserForm/UserForm"
import UserUpdateForm from "../UserForm/UserUpdateForm"
import GroupSelection from "../GroupForm/GroupSelection"
import Profile from "../Profile/Profile"

const Homepage = ({ currentUser, logout, updateUser, createGroup, groups }) => {
  const [ edit, editMintro ] = useState(false)
  const [ displayAddClass, addAnotherClass ] = useState(false)
  const personalProfile = () => {
  if (!currentUser.group_id) {
    return <GroupSelection currentUser={currentUser} updateUser={updateUser} createGroup={createGroup}/>
  } else if (!currentUser.name) {
    return <UserForm currentUser={currentUser} updateUser={updateUser}/>
  } else if (edit) {
    return <UserUpdateForm currentUser={currentUser} updateUser={updateUser} editMintro={editMintro} />
  } else  {
    return <div>
      {!displayAddClass && <div className="add-class" onClick={() => addAnotherClass(true)}>Add Another Class</div>}
      <Profile currentUser={currentUser} editMintro={editMintro} displayAddClass={displayAddClass} addAnotherClass={addAnotherClass} groups={groups} />
    </div>
  }
}

  return (
    <div>
      <div className="flex justify-end"><button className="logout" onClick={logout}>Log Out</button></div>
      <h1 className="welcome-header">Mintro&trade;</h1>
      <h1 className="welcome-subheader">introductions that stick</h1>
      {personalProfile()}
      <div className="flex justify-end pa-24 grey-small">Questions or Feedback? email&nbsp;<a href={"mailto: aarondouglasevans@gmail.com"}>aarondouglasevans@gmail.com</a></div>
    </div>
  )
};


export default Homepage;