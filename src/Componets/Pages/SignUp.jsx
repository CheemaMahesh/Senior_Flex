import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from '../Styles/SignUp.module.css';
import {auth} from '../../firebase';

import { useNavigate } from "react-router-dom";

import { useValue } from "../../ContextApi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setIsClicked,isClicked}=useValue();
  const navigate=useNavigate();


  // ==========================SignUp=================
  const signUp = (e) => {
    e.preventDefault();
  
    // Check if the password meets the minimum length requirement
    if (password.length < 6) {
      alert("Password should be at least 6 characters")
      return; // Exit early if the password is too short
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        alert("SignUp Successful!!!!!!!!!!1");
        navigate('/')

      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  
  return (
    <div className={styles.signUpContainer}>
     <form onSubmit={signUp} className={styles.signUpForm}>
        <h1>Create an Account</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
        <button  className={styles.red} onClick={()=>setIsClicked(!isClicked)}>
          Already a User ? LogIn!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
