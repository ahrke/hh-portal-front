import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './components/landing/Landing';
import Portal from './components/portal/Portal';
import Particles from 'react-particles-js';
import * as actions from './actions';
import SignIn from './containers/signIn/SignIn';

import particlesOptions from './misc/particleOptions';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

const mapStateToProps = (state, ownProps) => {
  return state.user
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      route: 'signin'
    }
  }

  handleRouteChange = (route) => this.setState({ route: route })


  render() {
    return (
      <div className="App grey-text text-lighten-2">
        <Particles className='particles' params={particlesOptions.options} />

        {console.log(`this is from the render: `,this.props.user.name_first)}

        {(this.props.user.loggedIn === false)
          ? <SignIn onRouteChange={this.handleRouteChange} />
          : <Portal onRouteChange={this.handleRouteChange} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
