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
      const element = <button key={id} onClick={() => console.log(id)}>
      <div>name:{groups[id].name}</div>
      <div>professor: { groups[id].professor} </div>
      </button>
      groupsArray.push(element)
    }
    return groupsArray
  }
  

  render() {
    return (
      <div>
        {this.renderGroups()}
        group selection
        or
        <GroupForm createGroup={this.props.createGroup} />
      </div>
    )
  }
}


export default GroupSelection;