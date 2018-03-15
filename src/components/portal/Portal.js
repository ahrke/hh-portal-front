import React from 'react';
import NavBar from '../navigationBar/NavBar';
import SideNav from '../navigationBar/SideNav';
import WorkArea from '../workArea/WorkArea';

import './Portal.css';

class Portal extends React.Component {
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
        <SideNav />
        <WorkArea />
      </div>
    )
  }
}

export default Portal;
