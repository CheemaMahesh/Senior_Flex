import React, { useState,useRef,useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import styles from "./SignIn.module.css";
import styles from '../Styles/SignIn.module.css'
import {auth} from '../../firebase';
import { useValue } from "../../ContextApi";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const navigate=useNavigate();
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setIsClicked,isClicked}=useValue();

  const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.focus()
    },[]);

    //======================Sign in
    
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        alert(`Welcome to Senior Flex ${email}`)
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClicks=()=>{
    setIsClicked(!isClicked)
  }

  return (
    <div className={styles.signInContainer}>
     <form onSubmit={signIn} className={styles.signInForm}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          ref={titleRef}
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
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
        <button  className={styles.red} onClick={handleClicks}>
          Not a User ? SignUp!!
        </button>
      </form>
    </div>
  );
};

export default SignIn;
