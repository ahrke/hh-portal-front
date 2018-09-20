import React from 'react';
import { Button, Forms, Row, Input } from 'react-materialize';
import LessonQs from './lessonQs/LessonQs';

import './QuestionCreationLessonDetails.css';

class QuestionCreationLessonDetails extends React.Component {
  lessonDetailsForm = () => {
    return (
      <div>
      <form onSubmit={this.props.submitLessonDetail}>
        <Row>
          <Input s={12} label="Lesson Name" labelClassName='labels' name='lessonName' />
          <Input s={6} type='select' label="Lesson Type" labelClassName='labels' defaultValue='1' name='lessonType'>
            <option value='1'>Test</option>
            <option value='2'>Lecture</option>
          </Input>
          <Input label="Lesson Value" labelClassName="labels" s={6} name='lessonValue' />
        </Row>
        <Button large className='green butts'>Set Lesson Details</Button>
      </form>
      </div>
    )
  }



  render() {
    return (
      <div className='lessonDetailBack'>
        <h3>Yo, this be the Lesson Details</h3>
        {this.lessonDetailsForm()}
      </div>
    )
  }
}

export default QuestionCreationLessonDetails;
