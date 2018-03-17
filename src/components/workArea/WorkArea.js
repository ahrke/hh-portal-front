import React from 'react';
import LessonView from '../lessonView/LessonView';
import CreateCourse from '../createCourse/CreateCourse';
import CreateLesson from '../createLesson/CreateLesson';

class WorkArea extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        role: ''
      },
      simpleMessage: '',
      currentView: ''
    }
  }

  componentDidMount() {
    this.setState({
      simpleMessage: this.props.simpleMessage
    })
  }

  handleViewChange = (view) => {
    switch(view) {
      case 'lessonView':
        return this.lessonView();
        break;
      case 'createCourse':
        return this.createCourseView();
        break;
      case 'createLesson':
        return this.createLessonView();
        break;
      default:
        return this.generalView();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentView: nextProps.newView
    })
  }

  generalView = () => {
    const { simpleMessage } = this.state;
    return (
      <div>
        <h1>Welcome...anonymous, what are we learning today?</h1>
        <h1>{simpleMessage}</h1>
      </div>
    )
  }

  createLessonView = () => {
    return (
      <CreateLesson />
    )
  }

  createCourseView = () => {
    return (
      <CreateCourse />
    )
  }

  lessonView = () => {
    return (
      <LessonView />
    )
  }

  render() {
    return (
      <div className='center-align' style={{paddingLeft: '300px'}}>
        {this.handleViewChange(this.state.currentView)}
      </div>
    )
  }
}

export default WorkArea;
