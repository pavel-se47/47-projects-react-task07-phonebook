import { createAction } from '@reduxjs/toolkit';

const fetchAllContactsRequest = createAction('contact/fetchAllContactsRequest');
const fetchAllContactsSuccess = createAction('contact/fetchAllContactsSuccess');
const fetchAllContactsError = createAction('contact/fetchAllContactsError');

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteContactRequest = createAction('contact/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contact/deleteContactError');

const filterContact = createAction('contact/filter');

// eslint-disable-next-line
export default {
  fetchAllContactsRequest,
  fetchAllContactsSuccess,
  fetchAllContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  filterContact,
};
