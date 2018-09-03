import React from 'react';
import { connect } from 'react-redux';
import bcrypt from 'bcryptjs';

import './Landing.css';

class Landing extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.setState({
      login_id: '',
      password: ''
    })
  }

  onButtonClick = ({ onSignInButtonClick }) => {
    //const hash = bcrypt.hashSync(this.refs.password.value, 10);
      //console.log("password from landing page sign in is....", hash);
      this.props.onSignInButtonClick(this.refs.login_id.value, this.refs.password.value);
  }

  render(){
    const inputBuilder = ( id, name, type, classes, placeholder, value ) => (
      <div className="row">
        <div className="col s3" />
          <div className="input-field col s6">
            <input id={id} name={name} ref={id} type={type} className={classes} placeholder={placeholder}/>
        </div>
      </div>
    );

    return (
      <div>
        <div className='center-align container' id='landing'>
          <h2 className='grey-text text-lighten-5'>Login </h2>
          <div>
              <div id='login-form'>
                {inputBuilder('login_id','login_id','text','validate grey-text text-lighten-5','enter your account id here')}
                {inputBuilder('password','password','password','validate grey-text text-lighten-5','enter password here')}
                <button
                  onClick={this.onButtonClick}
                  id='login-btn' type='button'
                  className='waves-effect waves-light btn-large blue lighten-1'
                > Login </button>
              </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Landing;
