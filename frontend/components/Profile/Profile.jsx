import React from "react"
import { fetchUsers } from "../../util/api"

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
    <div key={user.id} onClick={() => this.setState({ userProfile: user })}>{user.name}</div>
    ))
  )

  renderUserProfile = () => {
    if (!this.state.userProfile) return
    const { userProfile } = this.state
    return (
      <div>
        <div>name: {userProfile.name}</div>
        <div>email: {userProfile.email}</div>
        <div>expertise: {userProfile.expertise}</div>
        <div>phone: {userProfile.phone}</div>
      </div>
    )
  }

  render() {
    return <div>
      {this.renderUsers()}
      {this.renderUserProfile()}
    </div>
  }
}
export default Profile