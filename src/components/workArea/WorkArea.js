import React from 'react';
import LessonView from '../lessonView/LessonView';
import CreateLesson from '../createLesson/CreateLesson';
import SampleTestView from '../SampleTestView/SampleTestView';
import LessonTest from '../lessonTestView/LessonTest';
import UpdateGrade from '../../containers/updateGrade/UpdateGrade';
import MyGradesView from '../myGradesView/MyGradesView';
import MyStudentsView from '../myStudentsView/MyStudentsView';
import QuestionCreationMain from '../questionCreationForm/QuestionCreationMain';

import AddCourse from '../../containers/addNewCourse/AddCourse';
import AddTopic from '../../containers/addNewTopic/AddTopic';
import AddQuestion from '../../containers/addNewQuestion/AddQuestion';

class WorkArea extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        id: '',
        role: ''
      },
      simpleMessage: '',
      currentView: '',
      lessonId: ''
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
      case 'createTopic':
        return this.createTopicView();
        break;
      case 'createLesson':
        return this.createLessonView();
        break;
      case 'sampleTestView':
        return this.sampleTestView();
        break;
      case 'lessonTestView':
        return this.lessonTestView();
        break;
      case 'myGrades':
        return this.myGradesView();
        break;
      case 'myStudentsView':
        return this.myStudentsView();
        break;
      case 'blank':
        return <div></div>
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
        <h1>Welcome...{this.props.user.name_first}, what are we learning today?</h1>
        <h1>{simpleMessage}</h1>
      </div>
    )
  }

  createLessonView = () => {
    return (
      <AddQuestion course_id={this.props.currentCourse} topic_id={this.props.currentTopic} />
    )
  }

  createTopicView = () => {
    return (
      <AddTopic course_id={this.props.currentCourse} />
    )
  }

  createCourseView = () => {
    return (
      <AddCourse account_name={this.props.user.account_name} />
    )
  }

  lessonView = () => {
    return (
      <LessonView />
    )
  }

  sampleTestView = () => {
    return (
      <SampleTestView />
    )
  }

  lessonTestView = () => {
    return (
      <UpdateGrade user={this.props.user} lesson={this.props.currentLesson} />
    )
  }

  myGradesView = () => {
    return (
      <MyGradesView user={this.props.user} />
    )
  }

  myStudentsView = () => {
    let studentsSample = [
      {name_first:'moobear',account_name:'22021',grades:[
        {
          lesson_id:1,
          grade: 10
        },
        {
          lesson_id:2,
          grade: 10
        },
        {
          lesson_id:4,
          grade: 8
        }
      ]},
      {name_first:'callista',account_name:'32021',grades:[
        {
          lesson_id:2,
          grade: 5
        },
        {
          lesson_id:3,
          grade: 10
        },
        {
          lesson_id:4,
          grade: 8
        }
      ]}
    ];
    let lessonsSample = [
      {
        lesson_id: 1,
        lesson_name: 'toolbelt 101'
      },
      {
        lesson_id: 2,
        lesson_name: 'constable peery eyes'
      },
      {
        lesson_id: 3,
        lesson_name: 'windswept samurai'
      },
      {
        lesson_id: 4,
        lesson_name: 'who got the keys to ma beamaa'
      },
    ]
    return (
      <MyStudentsView user={this.props.user} />
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
