import React from 'react';
import { Collapsible, CollapsibleItem, Button } from 'react-materialize';
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
          <Collapsible accordion className="blue grey-text text-lighten-3 popout">
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

        <CollapsibleItem key={header} header={header} className="collapsible z-depth-1">
          <Collapsible accordion className="blue grey-text text-lighten-3 popout">
              {subs}
          </Collapsible>
        </CollapsibleItem>
    )
  }

  courseTools = () => {
    if(this.props.user.role == 1){
      return (
        this.CollapsibleBuilder(
          'Course Tools',
          [{name:'Create Course',message:'New Course',view:'createCourse'},
          {name:'Lesson Tools',message:'New Lesson',view:'createLesson'},
          {name:'Students View', message:'View Student Grades',view:'myStudentsView'}]
        )
      )
    } else if(this.props.user.role == 2) {
      return (
          <CollapsibleItem key='grades' header='My Grades' className="collapsible z-depth-1" onClick={() => this.props.changeWorkAreaView('myGrades')}>

          </CollapsibleItem>
      )
    }
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
      </Collapsible>
      </div>
    )
  }
}

export default SideNav;
