import { combineReducers } from 'redux';
import user from '../reducers/user';

const portalApp = combineReducers({
  user
});

export default portalApp;
