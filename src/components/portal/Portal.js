import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navigationBar/NavBar';
import SideNav from '../navigationBar/SideNav';
import WorkArea from '../workArea/WorkArea';

import './Portal.css';

const mapStateToProps = state => {
  return {
    user: {
      name_first: state.user.user.name_first,
      name_last: state.user.user.name_last,
      account_id: state.user.user.account_id,
      role: state.user.user.role,
      courses: state.user.user.courses,
      account_name: state.user.user.account_name
    }
  }
}

class Portal extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        account_id: '',
        name_first: '',
        name_last: '',
        role: ''
      },
      workAreaView: '',
      currentLesson: ''
    }
  }

  onComponentDidMount() {
    console.log(`this is from the Portal: `,this.props.user);
    this.setState({
      user: {
        account_id: this.props.user.account_id,
        name_first: this.props.user.name_first,
        name_last: this.props.user.name_last,
        role: this.props.user.role,
        courses: this.props.user.courses
      }
    })
  }

  handleWorkAreaView = (view) => {
    this.setState({
      workAreaView: view
    })
  }

  handleCurrentLesson = (lesson) => {
    console.log("lesson in Portal is...",lesson);
    this.setState({
      workAreaView: 'blank'
    })
    setTimeout(() => {
      this.setState({
        workAreaView: 'lessonTestView',
        currentLesson: lesson
      })
    },500)
  }

  render() {
    console.log(`this is from the Portal: `,this.props);
    return (
      <div>
        <NavBar />
        <SideNav changeWorkAreaView={this.handleWorkAreaView} user={this.props.user} changeLesson={this.handleCurrentLesson} />
        <WorkArea style={{height:"100%"}} simpleMessage="hello stranger" user={this.props.user} newView={this.state.workAreaView} currentLesson={this.state.currentLesson} />
      </div>
    )
  }
}

export default connect(mapStateToProps,null)(Portal);
