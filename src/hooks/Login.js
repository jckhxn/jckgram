import React,{useState} from 'react';
import * as firebase from 'firebase/app';
import { projectAuth } from '../firebase/config'

const provider = new firebase.auth.GoogleAuthProvider();




const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    
    projectAuth.onAuthStateChanged(user => { 
            
        if(user) {
            // User signed in.
            setLoggedIn(true);
         
        
        }
        else {
            // Not signed in.
            setLoggedIn(false); 
           
            
        }
        
    })
    
       
        return  (
       <div className="logButton" >
           {loggedIn ? <button className='logButton' onClick={() => projectAuth.signOut() }>Logout</button> : <button className='logButton' onClick={() => projectAuth.signInWithPopup(provider)}>Login</button> }
            
       </div>
        )
    }
      



export default Login;