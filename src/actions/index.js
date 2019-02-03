import axios from 'axios';

export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
export const EDIT_APP = 'EDIT_APP';
export const LOAD_DATE = 'LOAD_DATE';
export const loadAppointments = () => {
  return dispatch => {
    return axios.get('/api/appointments').then(response => {
      dispatch({ type: LOAD_APPOINTMENTS, appointments: response.data });
    });
  };
};

export const editApp = data => {
  return dispatch => {
    console.log(data.id, 'data.id');
    return axios.put(`/api/appointments/${data.id}`, data).then(response => {
      dispatch({ type: EDIT_APP, appointment: response.data });
    });
  };
};

export const loadDate = id => {
  return dispatch => {
    return axios.get(`/api/dates/${id}`).then(response => {
      dispatch({ type: LOAD_DATE, date: response.data });
    });
  };
};
