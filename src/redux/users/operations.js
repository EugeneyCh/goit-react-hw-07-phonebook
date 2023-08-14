import axios from 'axios';
import { fetchigInProgress, fetchingSuccess, fetcingError } from './slice';
axios.defaults.baseURL = 'https://64d87f405f9bf5b879ce4838.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchigInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    console.log(e);
    dispatch(fetcingError(e.message));
  }
};

// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   console.log('Response.data is...', response.data);
//   return response.data;
// });
