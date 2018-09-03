import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions';
import Landing from '../../components/landing/Landing';
import App from '../../App';

const mapDispatchToProps = dispatch => {
  return {
    onSignInButtonClick: (account_name, password) => {
      dispatch(signin(account_name,password))
    }
  }
}

const SignIn = connect(null, mapDispatchToProps)(Landing);

export default SignIn;
