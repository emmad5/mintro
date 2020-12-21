import React from "react"
import { fetchUsers } from "../../util/api"
import AboutMe from "./AboutMe"

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      userProfile: null
    }
  }

  componentDidMount() {
    const group_id = this.props.currentUser.group_id
    fetchUsers(group_id).then(users => {
      this.setState({ users })
    })
  }

  renderUsers = () => (
    this.state.users.map(user => (
    <div className={"user-el"} key={user.id} onClick={() => this.setState({ userProfile: user })}>{user.name}</div>
    ))
  )

  renderUserProfile = () => {
    if (!this.state.userProfile) return
    const { userProfile } = this.state
    return (
      <div>
        <AboutMe {...userProfile}/>
      </div>
    )
  }

  render() {
    return <div className="profile flex">
      <div className="user-list pa-24">
        <div className="class-members">Class Members:</div>
        {this.renderUsers()}
      </div>
      {this.renderUserProfile()}
    </div>
  }
}
export default Profile