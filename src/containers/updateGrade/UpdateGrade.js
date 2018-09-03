import React from 'react';
import { connect } from 'react-redux';
import { updateGrade } from '../../actions';
import LessonTest from '../../components/lessonTestView/LessonTest';
import App from '../../App';

const mapDispatchToProps = dispatch => {
  return {
    onSubmitButtonClick: (student_id, lesson_id, grade) => {
      dispatch(updateGrade(student_id, lesson_id, grade))
    }
  }
}

const UpdateGrade = connect(null, mapDispatchToProps)(LessonTest);

export default UpdateGrade;
