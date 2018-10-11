import React, { Component } from 'react';
import Contact from './Contact';

class AllContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allContact: []
        }
    }

    componentWillMount() {
        fetch('http://127.0.0.1:3000/api/contacts')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    allContact: result
                })
            });
    }

    render() {
        const { allContact } = this.state;
        return (

            <div>
                {
                    allContact.length > 0 &&
                    allContact.map(currentContact => <Contact person={currentContact} />)
                }
            </div>);
    }
}

export default AllContact;