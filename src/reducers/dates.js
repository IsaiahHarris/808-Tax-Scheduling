import { LOAD_DATE } from '../actions';

const initialState = [
  {
    day: 'Thursday',
    year: '2019',
    date: 'Feburary 21'
  }
];

const datesList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATE:
      return [action.date];
    default:
      return state;
  }
};

export default datesList;
