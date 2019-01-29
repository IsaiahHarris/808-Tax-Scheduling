import axios from 'axios';

export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
export const EDIT_APP = 'EDIT_APP';

export const loadAppointments = () => {
  return dispatch => {
    return axios.get('/api/appointments').then(response => {
      dispatch({ type: LOAD_APPOINTMENTS, appointments: response.data });
    });
  };
};

export const editApp = data => {
  return dispatch => {
    return axios.put(`/api/appointments/${data.id}`, data).then(response => {
      dispatch({ type: EDIT_APP, appointment: response.data });
    });
  };
};
