import React from 'react';

const ContactArray = (props) => {
  // eslint-disable-next-line react/prop-types
  const { contacts } = props;
  return (
      <div>
          <ul>
          {
              contacts.map(currentContact => (
              <li key={currentContact.id}>
                  {`${currentContact.firstName} ${currentContact.lastName} 
                  ${currentContact.mode}`}
              </li>))
          }
          </ul>
      </div>
    );
};

export default ContactArray;
