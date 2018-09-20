import React from 'react';
import { Input, Row, Button, Form } from 'react-materialize';

import './CreateCourse.css';

class CreateCourse extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let formE = (e) => form.elements[e].value;
    let data = new FormData(form);
    let courseToAdd = {
      course_name: formE('courseName'),
      course_code: formE('courseCode'),
      semester: formE('semester'),
      year: formE('year'),
      tasks_tot: formE('taskTot'),
      midterm_tot: formE('midTot'),
      final_tot: formE('examTot'),
      day_of_week: formE('day'),
      period: formE('period'),
      mathayom_level: formE('mathayom'),
      account_name: this.props.account_name
    };

    this.props.onCreateCourseButtonClick(courseToAdd);

    console.log(courseToAdd)
  }

  render() {
    return (
      <div className="createCourse">
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Input s={6} label="Course Name" className='inputs' required name='courseName' />
          <Input s={6} label="Course Code" required name='courseCode' />
          <Input s={4} type='select' label="Semester" defaultValue='1' required name='semester' >
            <option value='1'>1</option>
            <option value='2'>2</option>
          </Input>
          <Input label='Year' id='year' s={4} pattern="\d+" required />
          <Input s={4} type='select' label="Mathayom" defaultValue='1' required name='mathayom' >
            <option value='m1'>m1</option>
            <option value='m2'>m2</option>
            <option value='m3'>m3</option>
            <option value='m4'>m4</option>
            <option value='m5'>m5</option>
            <option value='m6'>m6</option>
          </Input>
          <Input s={4} label="Task Total" required name='taskTot' />
          <Input s={4} label="Midterm Total" required name='midTot' />
          <Input s={4} label="Exam Total" required name='examTot' />
          <Input s={6} type='select' label="Day of the Week" required name='day' >
            <option value='mon'>Monday</option>
            <option value='tue'>Tuesday</option>
            <option value='wed'>Wednesday</option>
            <option value='thu'>Thursday</option>
            <option value='fri'>Friday</option>
          </Input>
          <Input s={6} type='select' label="Period" defaultValue='1' required name='period' >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </Input>
        </Row>
        <Button s={4}
          large icon='add' className='green butts'
        />
      </form>
      </div>
    )
  }
}

export default CreateCourse;
