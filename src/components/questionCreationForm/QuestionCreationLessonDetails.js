import React from 'react';
import { Button, Forms, Row, Input } from 'react-materialize';

import './QuestionCreationLessonDetails.css';

class QuestionCreationLessonDetails extends React.Component {
  lessonDetailsForm = (onDetailChangeName, onDetailChangeType, onDetailChangeValue) => {
    return (
      <Row>
        <Input s={12} label="Lesson Name" labelClassName='labels' onChange={(e) => onDetailChangeName(e.target.value)} />
        <Input s={6} type='select' label="Lesson Type" labelClassName='labels' defaultValue='1' onChange={(e) => onDetailChangeType(e.target.value)}>
          <option value='1'>Test</option>
          <option value='2'>Lecture</option>
        </Input>
        <Input label="Lesson Value" labelClassName="labels" s={6} onChange={(e) => onDetailChangeValue(e.target.value)} />
      </Row>
    )
  }



  render() {
    let {onDetailChangeName, onDetailChangeType, onDetailChangeValue} = this.props;
    return (
      <div className='lessonDetailBack'>
        <h3>Yo, this be the Lesson Details</h3>
        {this.lessonDetailsForm(onDetailChangeName, onDetailChangeType, onDetailChangeValue)}
      </div>
    )
  }
}

export default QuestionCreationLessonDetails;
