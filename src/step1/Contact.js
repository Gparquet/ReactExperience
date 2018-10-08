import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);

        const initialState = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: ''
        }

        this.state = initialState;
    }

    render() {
        const {firstName, lastName, phoneNumber, email} = this.props.user;
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
                </p>
            </div>
        );
    }
}

export default Contact;