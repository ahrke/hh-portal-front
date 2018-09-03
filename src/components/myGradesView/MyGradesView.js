import React from 'react';

import './MyGradesView.css';

class MyGradesView extends React.Component {

  myGrades = (user) => {
    return (
      <div>
        {user.courses.map(course => {
          return (
            <div>
              <h2>{course.course_name}</h2>
              {course.topics.map(topic => {
                return (
                  <div>
                    <h3 className="tableHeader">{topic.topic_name}</h3>
                    <table className="tableLeft tableRight">
                    <tr>
                      <th className="tableStuff tableLeft">Lesson</th>
                      <th className="tableStuff">grade</th>
                      <th className="tableStuff">attempts</th>
                      <th className="tableStuff tableRight">date completed</th>
                    </tr>
                    {topic.lessons.map(lesson => {
                      return (
                        <tr>
                          <td className="tableStuff tableLeft">{lesson.lesson_name}:</td>
                          <td className="tableStuff">{lesson.grades.grade}</td>
                          <td className="tableStuff">{lesson.grades.attempts}</td>
                          <td className="tableStuff tableRight">{lesson.grades.date_completed.slice(0,10)} </td>
                        </tr>
                      )
                    })}
                    </table>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  render() {

    return (
      <div>
        {this.myGrades(this.props.user)}
      </div>
    )
  }
}

export default MyGradesView;
