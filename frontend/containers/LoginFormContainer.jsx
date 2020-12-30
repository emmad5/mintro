import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../actions/actions';
import LoginForm from '../components/Session/SessionForm';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    formType: 'Log In',
    header: 'Log In',
    navLink: <Link className="switch-session" to="/signup">sign up instead</Link>,
    errors: errors
  };
};

const mapDispatchToProps = {
  processForm: login,
  clearErrors: clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);