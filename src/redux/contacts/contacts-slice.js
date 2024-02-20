import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../helper';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: payload,
      }))
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      }))
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        items: state.items.filter(({ id }) => id !== payload),
      }))
      .addCase(deleteContact.rejected, rejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
