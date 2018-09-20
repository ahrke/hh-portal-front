import React from 'react';
import { Collapsible, CollapsibleItem, Button, Row } from 'react-materialize';
import './SideNav.css';

class SideNav extends React.Component {

  ToView = (value, view, title) => {
    const { changeWorkAreaView } = this.props;
    return (
      <CollapsibleItem key={value} header={title}>
        <span className='blue-text' onClick={() => changeWorkAreaView(`${view}`)}>{value}</span>
      </CollapsibleItem>
    )
  }

  TopicViewBuilder = (topic, topicNum, Cnum) => {
    const { changeWorkAreaView, changeLesson } = this.props;
    return (
      <CollapsibleItem key={topic.topic_id} header={topic.topic_name}>
      {(topic.lessons) ? (
        topic.lessons.map((lesson,i) =>
          <span key={lesson.lesson_id} className='blue-text' onClick={() => changeLesson({
            topicNum: topicNum,
            courseNum: Cnum,
            lessonNum: i
          })}>{lesson.lesson_name}</span>
        )
      ) : <span className='blue-text' > No lessons here! </span>
      }
      </CollapsibleItem>
    )
  }

  CollapsibleBuilder__ = (course,num) => {
    console.log("from CollapsibleBuilder, course is...",course)
    const subs = course.topics.map((topic,i) =>
      this.TopicViewBuilder(topic, i, num)
    )

    return (
        <CollapsibleItem key={course.course_id} header={course.course_name} className="collapsible z-depth-1">
          <Collapsible accordion className="blue lighten-1 grey-text text-lighten-3">
              {subs}
          </Collapsible>
        </CollapsibleItem>
    )
  }

  CollapsibleBuilder = (header, subheads) => {
    const subs = subheads.map(subhead => {
      return this.ToView(subhead.message,subhead.view,subhead.name)
    })

    return (

        <CollapsibleItem key={header} header={header} className="collapsible">
          <Collapsible accordion className="grey-text text-lighten-3 blue lighten-1">
              {subs}
          </Collapsible>
        </CollapsibleItem>
    )
  }

  courseTools = () => {
    if(this.props.user.role == 1){
      return (
        <CollapsibleItem header='Course Tools' className="collapsible">
          <CollapsibleItem className='blue grey-text text-lighten-3' header='View Student List'
          onClick={() => this.props.changeWorkAreaView(`myStudentsView`)} />
        </CollapsibleItem>
      )
    } else if(this.props.user.role == 2) {
      return (
          <CollapsibleItem key='grades' header='My Grades' className="collapsible z-depth-1" onClick={() => this.props.changeWorkAreaView('myGrades')}>

          </CollapsibleItem>
      )
    }
  }

  createTools = (changeWorkAreaView) => {
    return (
      <CollapsibleItem header='Create New...' className="collapsible">
        <CollapsibleItem className='blue grey-text text-lighten-3' header='Course' onClick={() => changeWorkAreaView(`createCourse`)}>Course</CollapsibleItem>
        <Collapsible accordion className="blue grey-text text-lighten-3">
          <CollapsibleItem header='Topic'>
            {(this.props.user.courses)
              ? (this.props.user.courses.map((course,i) =>
                <li key={course.course_id} className='buttCollapse' onClick={() => {
                  console.log("course_id is...",course.course_id)
                  this.props.changeCurrentCourse(course.course_id)
                  changeWorkAreaView(`createTopic`);
                }}>
                  {course.course_name}
                </li>))
              : <span className='blue-text' > No Courses! You need to create one </span>
            }
          </CollapsibleItem>
          <CollapsibleItem header='Lesson/Test'>
            {(this.props.user.courses) ? (
              <Collapsible accordion className="blue lighten-2 grey-text text-lighten-3">
              {this.props.user.courses.map((course,i) =>
                <CollapsibleItem header={course.course_name} onClick={() => {
                  console.log("course_id is...",course.course_id)
                  this.props.changeCurrentCourse(course.course_id)
                }}>
                  {(course.topics) ? (
                    course.topics.map((topic,i) =>
                      <li key={topic.topic_id} className='blue-text' onClick={() => {
                        console.log("topic_id is...",topic.topic_id)
                        this.props.changeCurrentTopic(topic.topic_id)
                        changeWorkAreaView(`createLesson`);
                      }}>
                        {topic.topic_name}
                      </li>
                    )
                  ) : <span className='blue-text' > No Topics! You need to create one </span>
                  }
                </CollapsibleItem>
              )}
              </Collapsible>
            ) : <span className='blue-text' > No Courses! You need to create one </span>
          }
          </CollapsibleItem>
        </Collapsible>
      </CollapsibleItem>
    )
  }

  render() {
    return (
      <div className="side-nav fixed blue-text" id='side-nav-custom'>
        <Collapsible accordion>
        {this.props.user.courses.map((course,i) => this.CollapsibleBuilder__(course,i))}
        {this.CollapsibleBuilder(
          'OT20245',
          [{name:'Lesson 1',message:'intro to...',view:'lessonView'},
          {name:'Test 1',message:'HTML Exam',view:'sampleTestView'},
          {name:'Lesson 2',message:'salarys man',view:'lessonView'},
          {name:'Lesson 3',message:'whoa whoa',view:'gen'}])}
        {this.courseTools()}
        {this.createTools(this.props.changeWorkAreaView)}
      </Collapsible>
      </div>
    )
  }
}

export default SideNav;
