import { LOAD_DATE, LOAD_DATES } from '../actions';

const initialState = [
  {
    day: 'Saturday',
    year: '2019',
    date: 'March 1'
  }
];

const datesList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATES:
      return [...action.dates];
    case LOAD_DATE:
      return [action.date];
    default:
      return state;
  }
};

export default datesList;
