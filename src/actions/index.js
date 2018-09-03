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
