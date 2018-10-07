import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Contact extends Component {

    constructor(props) {
        super(props);

        const initialState = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            isFamily: undefined
        }

        this.state = initialState;
    }
    componentDidMount() {
        let isFamily = this.props.firstName === 'Parquet' ? true : false;
        console.log(this.props.firstName);
        this.setState({ isFamily });

    }
    render() {
        const { firstName, lastName, phoneNumber, email, isFamily } = this.props.user;
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
    }
}

Contact.propTypes = {
    user : Proptypes.shape({ 
        firstName: Proptypes.string.isRequired,
    lastName: Proptypes.string.isRequired,
    phoneNumber: Proptypes.string.isRequired,
    email: Proptypes.string.isRequired,
    })
};

export default Contact;