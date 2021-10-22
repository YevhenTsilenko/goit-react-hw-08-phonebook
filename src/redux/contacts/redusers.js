import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { 
  getContactsRequest, getContactsSuccess, getContactsError,
  addContactRequest, addContactSuccess, addContactError,
  deleteContactRequest, deleteContactSuccess, deleteContactError,
  filterContacts
} from './actions';

const items = createReducer(
  [],
  {
    [getContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [getContactsError]: (_, {payload}) => payload,
  [addContactError]: (_, {payload}) => payload,
  [deleteContactError]: (_, {payload}) => payload,
});

const combineReducer = combineReducers({
  items,
  filter,
  loading,
  error,
})

export { combineReducer }

