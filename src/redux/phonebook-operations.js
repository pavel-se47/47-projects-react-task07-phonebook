import actions from '../redux/phonebook-actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://6422011f34d6cd4ebd805945.mockapi.io/';

const fetchAllContacts = () => dispatch => {
  dispatch(actions.fetchAllContactsRequest());
  axios
    .get('/contacts')
    .then(response => dispatch(actions.fetchAllContactsSuccess(response.data)))
    .catch(error => dispatch(actions.fetchAllContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(response => dispatch(actions.addContactSuccess(response.data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

// eslint-disable-next-line
export default { fetchAllContacts, addContact, deleteContact };
