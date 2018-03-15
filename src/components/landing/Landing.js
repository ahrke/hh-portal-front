import React from 'react';

import './Landing.css';

class Landing extends React.Component {
  onButtonClick = () => {
      this.props.onRouteChange('Portal');
  }

  render(){
    const inputBuilder = ( id, name, type, classes, placeholder, value ) => (
      <div className="row">
        <div className="col s3" />
          <div className="input-field col s6">
            <input id={id} name={name} type={type} className={classes} placeholder={placeholder} value={value} />
        </div>
      </div>
    );

    return (
      <div>
        <div className='center-align container' id='landing'>
          <h2 className='grey-text text-lighten-5'>Login</h2>
          <div id='login-form'>
            {inputBuilder('login_id','login_id','text','validate grey-text text-lighten-5','enter your account id here', null)}
            {inputBuilder('password','password','password','validate grey-text text-lighten-5','enter password here',null)}
            {inputBuilder('loginBtn','loginBtn','button','waves-effect waves-light btn-large blue lighten-1',null,'Login')}
            <button
              onClick={this.onButtonClick}
              id='login-btn' type='button'
              className='waves-effect waves-light btn-large blue lighten-1'
              value='login'
            />
          </div>
        </div>
      </div>
    )
  }

}

export default Landing;
