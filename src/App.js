import React, { Component } from 'react';
import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
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
      <div className="App">
        <Particles className='particles' params={particlesOptions.options} />

        {(this.state.route === 'signin')
          ? <Landing onRouteChange={this.handleRouteChange} user={this.state.user} />
          : <Dashboard onRouteChange={this.handleRouteChange} />
        }
      </div>
    );
  }
}

export default App;
