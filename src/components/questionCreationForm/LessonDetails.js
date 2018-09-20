import React from 'react';
import { Button, Forms, Row, Input } from 'react-materialize';
import LessonQs from './lessonQs/LessonQs';

import './QuestionCreationLessonDetails.css';

const LessonDetails = ({ lessonDetails }) => {
  return (
    <div className='lessonDetailBack lessonDetails'>
      <Row>
        <h3>{lessonDetails.lesson_name}</h3>
      </Row>
      <Row>
        <h5 s={5}>Lesson Type: {lessonDetails.lesson_type}</h5>
        <h5 >Lesson Value: {lessonDetails.lesson_value}</h5>
      </Row>

      <LessonQs data={lessonDetails.data} />
    </div>
  )
}

export default LessonDetails;
