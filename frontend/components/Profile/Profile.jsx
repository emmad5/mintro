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

  renderUsers = () => {
    this.state.users.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return this.state.users.map(user => {
      if (user.name) {
        return <div className={"user-el"} key={user.id} onClick={() => this.setState({ userProfile: user })}>{user.name}</div>
      }
    }) 
  }

  renderUserProfile = () => {
    if (!this.state.userProfile) return
    const { userProfile } = this.state
    return (
      <div>
        <AboutMe {...userProfile} currentUser={this.props.currentUser} editMintro={this.props.editMintro}/>
      </div>
    )
  }

  render() {
    if (this.props.displayAddClass) {
      return (
        <div className="flex flex-column align-center">
          <div className="not-available">Sorry that feature is not available yet</div>
          <div className="go-back" onClick={() => this.props.addAnotherClass(false)}>Go Back</div>
        </div>
      )
    }
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