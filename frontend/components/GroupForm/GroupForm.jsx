import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professor: '',
      password: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    console.log(group)
    this.props.createGroup(group);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-column">
            <div className="flex flex-column align-center pt-24">
              <div>Class Number and Section</div>
              <input 
                className="group-form-input"
                type="text"
                value={this.state.name}
                onChange={this.update('name')}
              />
            </div>
            <div className="flex flex-column align-center pt-24">
              <div>Professor Last Name</div>
              <input
                className="group-form-input"
                type="text"
                value={this.state.professor}
                onChange={this.update('professor')}
              />
            </div>
            <div className="flex flex-column align-center pt-24">
              <div>Password</div>
              <input
                className="group-form-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </div>
             <div className="flex justify-center">
              <input className="group-button" type="submit" value="Create Group" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GroupForm;