import React from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../../actions';
import CreateCourse from '../../components/createCourse/CreateCourse';
import App from '../../App';

const mapDispatchToProps = dispatch => {
  return {
    onCreateCourseButtonClick: (course) => {
      dispatch(addCourse(course))
    }
  }
}

const AddCourse = connect(null, mapDispatchToProps)(CreateCourse);

export default AddCourse;
