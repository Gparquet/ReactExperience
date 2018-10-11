import React, {Component} from 'react';
import AllContact from './AllContact.component';
 
class App extends Component{
    render(){
        const person = {
        firstName: 'Parquet', 
        lastName: 'Tata', 
        phoneNumber : '06366565', 
        email: 'toto.tata@test.fr',
        isFamily: false,
        };
        
        return(
            <div>
                <h1>First Application React</h1>
                <AllContact />
            </div>    
        );
    }
}

export default App;