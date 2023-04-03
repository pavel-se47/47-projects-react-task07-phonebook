import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getLoadingContacts = state => state.contacts.load;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line
export default {
  getAllContacts,
  getLoadingContacts,
  getFilter,
  getFilteredContacts,
};
