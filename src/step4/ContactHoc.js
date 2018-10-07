import React from 'react';
import Proptypes from 'prop-types';

const propType = {
    user : Proptypes.shape({ 
        firstName: Proptypes.string.isRequired,
    lastName: Proptypes.string.isRequired,
    phoneNumber: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
    })
};

const ContactHoc = (user)=>{
    const { firstName, lastName, phoneNumber, email, isFamily } = user;
    return (
        <div id="container">
            <h2>Je suis un composant contact</h2>
            <p>
                Nom : {firstName}
                <br />
                Prenom : {lastName}
                <br />
                Numéro de téléphone : {phoneNumber}
                <br />
                email : {email}
                <br />
                {
                    isFamily &&
                    <p>Je suis de la famille</p>
                }
            </p>
        </div>
        );
};

ContactHoc.prototype = propType;

export default ContactHoc;