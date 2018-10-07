import React, {Component} from 'react';
import ContactHoc from './ContactHoc';
 
class App extends Component{
    render(){
        const user = {
        firstName: 'Parquet', 
        lastName: 'Tata', 
        phoneNumber : '06366565', 
        email: 'toto.tata@test.fr',
        isFamily: false,
        };
        
        return(
            <div>
                <h1>First Application React</h1>
                <ContactHoc {...user} />
            </div>    
        );
    }
}

export default App;