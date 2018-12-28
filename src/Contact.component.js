import React, {Component} from 'react';

class ContactComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [{
                firstName: 'jean',
                lastName: 'phil'
            },
            {
                firstName: 'larry',
                lastName: "cxwc",
            }
            ]
        };
    }
    render(){
        return (
        <div>  
        </div>);
    }
}