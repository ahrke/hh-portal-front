const initialState = {
  account_id: '',
  name_first: '',
  name_last: '',
  loggedIn: false
}

const signinReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SIGNIN':
      console.log("action.payload for signinReducer is...",action.payload);
      return {
        account_id: action.payload.account_id,
        name_first: action.payload.name_first,
        name_last: action.payload.name_last,
        courses: action.payload.courses,
        account_name: action.payload.account_name,
        role: action.payload.role,
        loggedIn: true
      };
    default:
      console.log('default');
      console.log(state);
      return state;
  }
}

export default signinReducer;
