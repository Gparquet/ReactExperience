import React, { Component } from 'react';
import HelloComponent from './Hello.component';
import ContactComponent from './Contact.component';

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
      },
      {
        id: 'eeb5dcfd-1d4d-4afe-b589-81bbae02187e',
        firstName: 'Larry',
        lastName: 'Bambelle',
      },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
            <div>
                <h1>Application React OCN</h1>
                 <HelloComponent />
                 <ContactComponent contacts={contacts} />
            </div>
    );
  }
}

export default App;
