import React from 'react';
import { connect } from 'react-redux';
import operations from 'redux/phonebook-operations';
import actions from 'redux/phonebook-actions';
import styles from './PhonebookContacts.module.css';
import phonebookSelectors from 'redux/phonebook-selectors';

const PhonebookContacts = ({
  contacts,
  filter,
  addFilterResult,
  addDeleteContact,
}) => (
  <div className={styles.phonebookContacts}>
    <p className={styles.title}>Contacts</p>

    <div className={styles.border}>
      <label className={styles.label}>
        Enter name for search
        <input
          type="text"
          className={styles.input}
          name="filter"
          value={filter}
          placeholder="John Doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={addFilterResult}
        />
      </label>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactName}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={styles.button}
              onClick={() => addDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p className={styles.subtitle}>Total contacts: {contacts.length}</p>
    </div>
  </div>
);

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getFilteredContacts(state),
  filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  addDeleteContact: id => dispatch(operations.deleteContact(id)),
  addFilterResult: event => dispatch(actions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookContacts);
