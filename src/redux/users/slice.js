import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'phonebook',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact(state, action) {
      return {
        ...state,
        items: state.contacts.items.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    updateFilter(state, action) {
      return { ...state, filter: action.payload };
    },
    // },
    // extraReducers: {
    fetchigInProgress(state) {
      state.contacts.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    fetcingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.items = [];
      state.contacts.error = action.payload;
    },
    // [fetchContacts.pending]: state => {
    //   return { ...state, isLoading: true };
    // },
    // [fetchContacts.fulfilled]: (state, action) => {
    //   return { ...state, items: action.payload };
    // },
    // [fetchContacts.rejected]: state => {
    //   return { ...state, error: true };
    // },
  },
});

// console.log(contactsSlice);

// Генератори екшенів
export const {
  addContact,
  deleteContact,
  updateFilter,
  fetchigInProgress,
  fetchingSuccess,
  fetcingError,
} = contactsSlice.actions;
// Редюсер слайсу

export const contactsReducer = contactsSlice.reducer;
