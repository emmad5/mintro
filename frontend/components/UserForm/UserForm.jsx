import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentUser.id,
      name: '',
      linked_in: '',
      birthdate: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user)
    this.props.updateUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <label>Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
              />
            </label>
            <br />
            <label>LinkedIn:
              <input type="text"
                value={this.state.linked_in}
                onChange={this.update('linked_in')}
              />
            </label>
            <br />
            <br />
            <label>Birthdate:
              <input type="date"
                value={this.state.birthdate}
                onChange={this.update('birthdate')}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;