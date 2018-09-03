import signinReducer from './signinReducer';

const initialState = {
  user: {
    account_id: '',
    name_first: 'default',
    name_last: '',
    courses: [],
    account_name: '',
    role: '',
    loggedIn: false
  }
};

const user = (state = initialState, action) => {
  switch(action.type){
    case 'SIGNIN':
      return Object.assign({}, state, {
        user: signinReducer(state, action)
      });
    default:
      return state;
  }
};

export default user;
