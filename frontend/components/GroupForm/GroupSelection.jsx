import React from 'react';
import { Link } from 'react-router-dom';
import GroupForm from "../GroupForm/GroupForm"
import { fetchGroups } from "../../util/api"

class GroupSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { groups: {}, passwordOpen: {}, passwordInput: "" }
  }

  componentDidMount() {
    fetchGroups().then(groups => {
      this.setState({ groups })
    })
  }


  renderGroups = () => {
    const { groups } = this.state
    const groupsArray = []
    for (const id in groups) {
      const element = <div key={id}>
      <button className="group-button min-width-200" onClick={() => this.setState({ passwordOpen: id })}>
      <div>Name &nbsp;{groups[id].name}</div>
      <div>Professor &nbsp;{ groups[id].professor} </div>
      </button>
        {this.state.passwordOpen === id && 
        <div><input type="password"
        className="group-form-input"
        placeholder="password"
        value={this.state.passwordInput}
        onChange={(e) => this.setState({ passwordInput: e.currentTarget.value })}/> 
        <div><input className="submit" type="submit" value="Join Group" onClick={() => this.addGroupToUser(id)}/></div>
        </div>}
      </div>
      groupsArray.push(element)
    }
    return groupsArray
  }

  addGroupToUser = (groupId) => {
    console.log(this.state.passwordInput)
    const user = { id: this.props.currentUser.id, group_id: groupId, group_password: this.state.passwordInput }
    this.props.updateUser(user)
  }

  render() {
    return (
      <div className="flex space-around group-selection">
        <div className="pa-32 bordered border-radius-5 group-boxes">
          <div className="">Join a Group</div>
          <div className="">{this.renderGroups()}</div>
        </div>
        <div className="pa-32 bordered border-radius-5 group-boxes">
          <div className="">Create a Group</div>
          <div className=""><GroupForm createGroup={this.props.createGroup} /></div>
        </div>
      </div>
    )
  }
}


export default GroupSelection;