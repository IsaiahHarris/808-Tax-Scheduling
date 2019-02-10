import { LOAD_DATE, LOAD_DATES } from '../actions';

const initialState = [
  {
    day: 'Thursday',
    year: '2019',
    date: 'Feburary 21'
  }
];

const datesList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATES:
      return [...action.dates];
    case LOAD_DATE:
      return [...state, action.date];
    default:
      return state;
  }
};

export default datesList;
