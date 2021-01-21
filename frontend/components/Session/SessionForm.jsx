import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  renderErrors = () => (
    this.props.errors.map((error, idx) => (
      <div className="error" key={idx}>{error}</div>
    ))
  )

  render() {
    return (
      <div className="login-form-container">
        <h1 className="welcome-header">Mintro&trade;</h1>
        <h1 className="welcome-subheader">introductions that stick</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="sign-up-heading">{this.props.header}</div>
          <div className="login-form">
            <div>
              <label>
                <div>Email Address</div>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
            </div>
            <div>
              <label>
                <div>Password</div>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
            </div>
            <div className="error-container">{this.props.errors && this.renderErrors()}</div>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          <div onClick={this.props.clearErrors} className="pt-24">{this.props.navLink}</div>
        </form>
      </div>
    );
  }
}

export default SessionForm;