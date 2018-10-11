import React, {Component} from 'react';
import Contact from './Contact';

class AllContact extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            AllContact : []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/api/contacts')
        .then(res => res.json())
        .then((result) =>{
            this.setState({
                AllContact: result
            })
        });
    }

    render(){
        <div>
            {
                this.state.AllContact.length > 0 &&
                this.state.AllContact.map((currentContact) =>{
                    <Contact person={currentContact} />
                })
            } 
        </div>
    }
}

export default AllContact;