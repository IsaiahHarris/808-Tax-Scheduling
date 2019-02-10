import { LOAD_APPOINTMENTS, EDIT_APP } from '../actions';

const initialState = [
  {
    name: 'john',
    phone: '8087783166',
    subject: 'taxes',
    note: 'wants to do taxes'
  }
];

const appointmentsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPOINTMENTS:
      return [...action.appointments];
    case EDIT_APP:
      let newState = state.filter(appointment => appointment.id !== action.id);
      return [...newState, action.appointment];
    default:
      return state;
  }
};

export default appointmentsList;
