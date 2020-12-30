import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../actions/actions';
import SignupForm from '../components/Session/SessionForm';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    formType: 'Sign Up',
    header: 'New to Mintro? Sign up',
    navLink: <Link className="switch-session" to="/login">log in instead</Link>,
    errors: errors
  };
};

const mapDispatchToProps = {
  processForm: signup,
  clearErrors: clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);