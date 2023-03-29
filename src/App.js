import React, { Component } from 'react';
import PhonebookContacts from 'components/PhonebookContacts/PhonebookContacts';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';

class App extends Component {
  render() {
    return (
      <>
        <PhonebookForm />
        <PhonebookContacts />
      </>
    );
  }
}

export default App;
