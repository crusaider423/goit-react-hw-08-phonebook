import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../../api/api-contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await Api.fetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  // ця ф-я називається payloadCreater:
  async (obj, thunkAPI) => {
    try {
      const data = await Api.fetchAddContact(obj);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  //третім параметром можна передати обєкт з додатковими налаштуваннями:
  {
    condition: ({ name, number }, thunkAPI) => {
      const { contacts } = thunkAPI.getState();
      const normalizedName = name.toLowerCase();
      const normalizedNumber = number.toLowerCase();
      const IsDublicate = contacts.items.some(
        ({ name, number }) =>
          name.toLowerCase() === normalizedName ||
          number.toLowerCase() === normalizedNumber
      );
      if (IsDublicate) {
        alert(`${name} is already in contacts`);
        return false; // обов'язково треба повернути false щоб після condition не викликалась ця функція
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await Api.fetchDeleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
