import React from 'react';

import './MyStudentsView.css';

class MyStudentsView extends React.Component {


  studentsTableHeader = (lessons) => {
    console.log("lessons is...\n",lessons)
    let topRow = lessons.map(lesson => {
      console.log("lesson_name...\n",lesson)
      if(lesson.lesson_name)
      return lesson.lesson_name
    })

    return (
      <tr>
        <th>Student Name</th>
        <th>Student Number</th>
        {topRow.map(l => {
          return <th>{l}</th>
        })}
      </tr>
    )
  }

  myStudentsRow = (student, lessons) => {
    let checkGrade = (lesson) => {
      let grade = 0;
      student.grades.forEach(l => {
        console.log("l from checkGrade returns...",l.lesson_id, " " , lesson.lesson_id)
        l.lesson_id == lesson.lesson_id ?
        grade = l.grade
        : grade = grade
      })
      return grade;
    }

    let studentGrades = () => {
      console.log("lessons is...\n",lessons)
      lessons.map(lesson => {
        return (
          <td>{checkGrade(lesson)}</td>
        )
      })

    }

    return (
      <tr>
        <td>{student.name_first}</td>
        <td>{student.account_name}</td>
        {lessons.map(lesson => {
          return (
            <td>{checkGrade(lesson)}</td>
          )
        })}
      </tr>
    )
  }

  coursesTables = (courses) => {
    return (
      <div>
        {courses.map(course => {
          return (
            <div className="courseBox">
              <h2>{course.course_name}</h2>
              <table className="bordered">
                <tbody>
                {this.studentsTableHeader(course.lessons)}
                {course.students.map(student => this.myStudentsRow(student, course.lessons))}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    )
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        <h4>`my student's grades will go here`</h4>
        {this.coursesTables(user.courses)}
      </div>
    )
  }
}

export default MyStudentsView;
