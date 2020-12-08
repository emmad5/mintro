import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../actions/actions';
import SignupForm from '../components/Session/SignupForm';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
    errors: errors
  };
};

const mapDispatchToProps = {
  processForm: signup,
  clearErrors: clearErrors
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);