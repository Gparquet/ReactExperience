import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        age: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        id: PropTypes.string,
        lastName: PropTypes.string.isRequired,
    })),
};

const ContactArray = (props) => {
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

ContactArray.propTypes = propTypes;

export default ContactArray;
