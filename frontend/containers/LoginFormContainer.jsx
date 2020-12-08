import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../actions/actions';
import LoginForm from '../components/Session/LoginForm';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
    errors: errors
  };
};

const mapDispatchToProps = {
  processForm: login,
  clearErrors: clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);