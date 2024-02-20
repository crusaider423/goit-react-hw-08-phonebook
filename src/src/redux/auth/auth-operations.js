import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../../api/api-user';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (obj, { rejectWithValue }) => {
    try {
      const data = await Api.fetchSignupUser(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (obj, { rejectWithValue }) => {
    try {
      const data = await Api.fetchLoginUser(obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (token, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const data = await Api.fetchCurrentUser(token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        return false;
      }
    },
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await Api.fetchLogoutUser();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
