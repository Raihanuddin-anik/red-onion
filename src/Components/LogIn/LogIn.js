import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import './LogIn.css';
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { Form ,Button, Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


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
  const SingInWithPopUp = () => {

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var { displayName, email, photoURL } = result.user;
        const UserInfo = {
          isSingIn: true,
          name: displayName,
          email: email,
          photo: photoURL

        }
        setUser(UserInfo)
        setlogedInUser(UserInfo);
        localStorage.setItem("user",JSON.stringify(UserInfo));
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

    
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
        <Form className="w-75">
          <Form.Group  controlId="formBasicEmail">
            <Form.Control className="ipt" type="name" required placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="email" required placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" required placeholder="Confirm Password" />
          </Form.Group>
          <Button className="w-100" variant="danger" type="submit">
            Submit
          </Button>
          <Button onClick={SingInWithPopUp}  className="w-100 mt-2" variant="primary" type="submit">
            SingInWithGoogle
            
          </Button>
         
        </Form>
        </Col>
        </Row>  
    

        </Container>


  


  );
};

export default LogIn;