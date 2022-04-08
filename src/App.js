import './App.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const auth = getAuth(app)
function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState(false)
  const [error, setError] = useState(false)
  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }
  const handelRegisteredChange = (event) => {
    setRegistered(event.target.checked)
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value)
  }
  const handleFormSubmit = (event) => {
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          verifyEmil()
        })
        .catch((error) => {
          console.error(error)
          setError(error.message)
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          setEmail('')
          setPassword('')
        })
        .catch((error) => {
          console.error(error)
          setError(error.message)
        })
    }
    event.preventDefault()
  }
  const handelPasswordRest = () => {
    sendPasswordResetEmail(auth, email)
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('I love You oyshe')
      })
  }
  const verifyEmil = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('oyshe')
      })
  }
  return (
    <div className="">
      <div className="registration w-50 mx-auto mt-2">
        <h2 className='text-primary'>Please {registered ? 'Login' : 'Register'}</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handelRegisteredChange} type="checkbox" label="Already registered" />
          </Form.Group>
          <Button onClick={handelPasswordRest} variant="link">Forget Password</Button>
          <Button variant="primary" type="submit">
            {registered ? 'Login' : ' Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default App;
