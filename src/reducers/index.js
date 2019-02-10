import { combineReducers } from 'redux';

import appointmentsList from './appointments';
import datesList from './dates';

export default combineReducers({
  appointmentsList,
  datesList
});
