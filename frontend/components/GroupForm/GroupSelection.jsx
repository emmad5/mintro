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
      const element = <button className="group-button min-width-200" key={id} onClick={() => this.addGroupToUser(id)}>
      <div>Name &nbsp;{groups[id].name}</div>
      <div>Professor &nbsp;{ groups[id].professor} </div>
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