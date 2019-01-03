import React, { Component } from 'react';
import HelloComponent from './Hello.component';
import ContactArray from './ContactArray.component';
import AddContact from './AddContact.component';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      contacts: [{
        id: '6b387d64-4b24-4c5e-8bd0-4d23b4c8ea9b',
        firstName: 'Jean',
        lastName: 'Phil',
        age: 19,
      },
      {
        id: 'eeb5dcfd-1d4d-4afe-b589-81bbae02187e',
        firstName: 'Larry',
        lastName: 'Bambelle',
        age: 70,
      },
      ],
      firstName: '',
      lastName: '',
    };
    this.addContact = this.addContact.bind(this);
  }

  componentWillMount() {
    // eslint-disable-next-line no-console
    console.log('Start mounting');
    // eslint-disable-next-line react/prop-types
    const { contacts } = this.state;
    const contactUpdated = [];
    contacts.forEach(currentContact => {
      let mode = '';
      if (currentContact.age >= 15 && currentContact.age < 60) {
        mode = 'young';
      } else {
        mode = 'old';
      }
      contactUpdated.push({ ...currentContact, mode });
    });
    this.setState({
      contacts: contactUpdated,
    });
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('end mounting');
  }

  addContact = (firstName, lastName) => {
    const { contacts } = this.state;
    const updateContacts = [...contacts, { id: 'eeb5dcfd-1d4d-4afe-b589-81bbae02187f',
      firstName,
      lastName,
      age: 19,
    }];
    this.setState({
      contacts: updateContacts,
    });
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAdd = () => {
    const { firstName, lastName } = this.state;
    // eslint-disable-next-line react/prop-types
    this.addContact(firstName, lastName);
  };

  render() {
    const { contacts, firstName, lastName } = this.state;
    const addContactProps = {
        handleFunctions: {
          handleAdd: this.handleAdd,
          handleChange: this.handleChange,
        },
        data: {
        firstName,
        lastName,
        },
    };
    return (
            <div>
                <h1>Application React OCN</h1>
                 <HelloComponent />
                 <ContactArray contacts={contacts} />
                 <AddContact props={addContactProps} />
            </div>
    );
  }
}

export default App;
