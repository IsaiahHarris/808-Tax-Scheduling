import { LOAD_APPOINTMENTS } from '../actions';

const initialState = [
  {
    name: 'john',
    phone: '8087783166',
    time: '8:30',
    date: '2/12/19',
    person: 'bernice',
    subject: 'taxes',
    note: 'wants to do taxes'
  }
];

const appointmentsList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APPOINTMENTS:
      return [...action.appointments];
    default:
      return state;
  }
};

export default appointmentsList;
