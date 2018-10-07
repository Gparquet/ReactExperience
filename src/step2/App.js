import React, {Component} from 'react';
import Contact from './Contact';
 
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
                <Contact user={user} />
            </div>    
        );
    }
}

export default App;