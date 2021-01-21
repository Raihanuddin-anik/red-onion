import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import './LogIn.css';
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const LogIn = () => {  

    var provider = new firebase.auth.GoogleAuthProvider();

    const [logedInUser, setlogedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSingIn: false,
        name: '',
        email: '',
        photo: '',

    })
    console.log(user)
      const SingInWithPopUp = () =>{
         
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var {displayName, email, photoURL}= result.user;
            const UserInfo ={
                isSingIn: true,
                name: displayName,
                email: email,
                photo: photoURL

            }
            setUser(UserInfo)
            setlogedInUser(UserInfo);
            history.replace(from)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
         
      }

    // const CheckEmailPassword = () => {
    //     console.log("email")
    // }
      
    
    return (
       
            <div>
                {
                    user.isSingIn &&
                    <div>
                    <h3>{user.email}</h3>
                    </div>

                }
                <br></br>
               <button onClick={()=>SingInWithPopUp()}>Sing In With google Pop Up</button>
            </div>
        
       
    );
}; 
 
export default LogIn;