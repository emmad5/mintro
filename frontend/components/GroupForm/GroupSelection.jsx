import React from 'react';
import { Link } from 'react-router-dom';
import GroupForm from "../GroupForm/GroupForm"
import { fetchGroups } from "../../util/api"

class GroupSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { groups: {} }
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
      const element = <button className="group-button" key={id} onClick={() => this.addGroupToUser(id)}>
      <div>name:{groups[id].name}</div>
      <div>professor: { groups[id].professor} </div>
      </button>
      groupsArray.push(element)
    }
    return groupsArray
  }

  addGroupToUser = (groupId) => {
    const user = { id: this.props.currentUser.id, group_id: groupId }
    this.props.updateUser(user)
  }

  render() {
    return (
      <div className="flex space-around group-selection">
        <div className="">
          <div className="pa-24 bordered">Join a Group</div>
          <div className="pa-24 bordered">{this.renderGroups()}</div>
        </div>
        <div className="">
          <div className="pa-24 bordered">Create a Group</div>
          <div className="pa-24 bordered"><GroupForm createGroup={this.props.createGroup} /></div>
        </div>
      </div>
    )
  }
}


export default GroupSelection;