import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../helper';
import {
  signupUser,
  loginUser,
  currentUser,
  logoutUser,
} from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  isLogin: false,
  error: null,
};

const fulfilled = (_, { payload }) => ({
  user: payload.user,
  token: payload.token,
  isLoading: false,
  isLogin: true,
  error: null,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.pending, pending)
      .addCase(signupUser.fulfilled, fulfilled)
      .addCase(signupUser.rejected, rejected)
      .addCase(loginUser.pending, pending)
      .addCase(loginUser.fulfilled, fulfilled)
      .addCase(loginUser.rejected, rejected)
      .addCase(currentUser.pending, pending)
      .addCase(currentUser.fulfilled, (state,{payload}) => ({
        ...state,
        user: payload,
        isLoading: false,
        isLogin: true,
        error: null,
      }))
      .addCase(currentUser.rejected, (state, { payload }) => ({
        ...state,
        isLoading: false,
        token: '',
        error: payload,
      }))
      .addCase(logoutUser.pending, pending)
      .addCase(logoutUser.fulfilled, () => initialState)
      .addCase(logoutUser.rejected, rejected);
  },
});

export const authReducer = authSlice.reducer;
