import axios from 'axios';
import { SIGNIN, UPDATEGRADE } from './types';

export const signin = (account_name, password) => async dispatch => {
  const res = await axios.post('/signin', {
    account_name,
    password
  });

  console.log(res.data);

  dispatch({ type: SIGNIN, payload: res.data });
}

export const updateGrade = (student_id,lesson_id,grade) => async dispatch => {
  const res = await axios.post('/updateGrade', {
    student_id,
    lesson_id,
    grade
  });

  //dispatch({ type: UPDATEGRADE, payload: res.data });
}

export const addCourse = (course) => async dispatch => {
  const res = await axios.post('/addNewCourse', course);

  console.log(res.data);

}

export const addTopic = (t) => async dispatch => {
  const res = await axios.post('/addNewTopic', t);

  console.log(res.data);

}

export const addQuestion = (q) => async dispatch => {
  const res = await axios.post('/addNewTest', q)

  console.log(res.data);
}
