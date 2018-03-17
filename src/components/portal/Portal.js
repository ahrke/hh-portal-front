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
      },
      workAreaView: ''
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

  handleWorkAreaView = (view) => {
    this.setState({
      workAreaView: view
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideNav changeWorkAreaView={this.handleWorkAreaView} />
        <WorkArea simpleMessage="hello stranger" newView={this.state.workAreaView} />
      </div>
    )
  }
}

export default Portal;
