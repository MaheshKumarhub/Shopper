import React, { useState } from 'react';
import { app, database } from '../firebaseConfig'; // Adjust the path as per your project structure
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom'

const auth = getAuth(app);

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update Realtime Database with the user's email
      const dbRef = ref(database, 'users/' + userCredential.user.uid);
      await set(dbRef, {
        email: email
      });

      // Handle successful sign-up
      console.log('User signed up successfully:', userCredential.user);
    } catch (error) {
      // Handle errors here
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUp-fields">
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link style={{textDecoration: 'none'}} to='/'><button onClick={handleSignUp}>Continue</button></Link>
        <p className="loginSignUp-login">Already have an account? <span>Login here</span></p>
        <div className="loginSignUp-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
