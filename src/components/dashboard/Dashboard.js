import React from 'react';
import NavBar from '../navigationBar/NavBar';

import './Dashboard.css';

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        role: ''
      }
    }
  }

  onComponentDidMount() {
    this.setState({
      user: {
        id: this.props.id,
        role: this.props.role
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="side-nav fixed" id='side-nav-custom'>
          <header>
            Hello
          </header>
        </div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard;
