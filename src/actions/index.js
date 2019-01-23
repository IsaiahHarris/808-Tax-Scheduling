import axios from 'axios';

export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';

export const loadAppointments = () => {
  return dispatch => {
    return axios.get('/api/appointments').then(response => {
      dispatch({ type: LOAD_APPOINTMENTS, appointments: response.data });
    });
  };
};
