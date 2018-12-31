import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ContactComponent extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { contacts } = this.props;
    return (
        <div>
            <ul>
            {
                contacts.map(currentContact => (
                <li key={currentContact.id}>{`${currentContact.firstName} ${currentContact.lastName}`}</li>))
            }
            </ul>
        </div>
    );
  }
}

export default ContactComponent;
