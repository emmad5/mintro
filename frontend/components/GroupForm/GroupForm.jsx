import React from 'react';

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professor: ''
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
          <div>
            Create a new group!
            <br />
            <label>Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
              />
            </label>
            <br />
            <label>Professor:
              <input type="text"
                value={this.state.professor}
                onChange={this.update('professor')}
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

export default GroupForm;