import { LOAD_APPOINTMENTS } from '../actions';

const initialState = [];

const appointmentsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPOINTMENTS:
      return [...action.appointments];
    default:
      return state;
  }
};

export default appointmentsList;
