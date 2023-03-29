import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phonebookReducer from './phonebook-reducer';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  logger,
});

// eslint-disable-next-line
export default store;
