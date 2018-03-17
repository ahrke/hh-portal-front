import React, { Component } from 'react';
import Landing from './components/landing/Landing';
import Portal from './components/portal/Portal';
import Particles from 'react-particles-js';

import particlesOptions from './misc/particleOptions';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        id: '',
        role: ''
      },
      route: 'signin'
    }
  }

  handleRouteChange = (route) => this.setState({ route: route })

  render() {
    return (
      <div className="App grey-text text-lighten-2">
        <Particles className='particles' params={particlesOptions.options} />

        {(this.state.route === 'signin')
          ? <Landing onRouteChange={this.handleRouteChange} user={this.state.user} />
          : <Portal onRouteChange={this.handleRouteChange} />
        }
      </div>
    );
  }
}

export default App;
