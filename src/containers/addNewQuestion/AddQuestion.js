import React from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions';
import QuestionCreationMain from '../../components/questionCreationForm/QuestionCreationMain';
import App from '../../App';

const mapDispatchToProps = dispatch => {
  return {
    onCreateQuestionButtonClick: (q) => {
      dispatch(addQuestion(q))
    }
  }
}

const AddQuestion = connect(null, mapDispatchToProps)(QuestionCreationMain);

export default AddQuestion;
