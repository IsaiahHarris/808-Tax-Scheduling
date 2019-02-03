import { LOAD_APPOINTMENT } from '../actions';

const initialState = [
  {
    day: 'Wednesday',
    year: '2019',
    date: 'Feburary 20'
  }
];

const datesList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPOINTMENT:
      return [...action.date];
    case EDIT_APP:
      let newState = state.filter(appointment => appointment.id !== action.id);
      return [...newState, action.appointment];
    default:
      return state;
  }
};

export default appointmentsList;
