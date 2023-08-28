import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', credentials);
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        alert("Sorry, something went wrong. Try again")
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');
      debugger
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
