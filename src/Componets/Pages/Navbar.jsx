import React from "react";
import styles from "../Styles/Navbar.module.css";
import LogoImage from "../Assets/Logo.png"; 
import { Link} from "react-router-dom";
import { useValue } from "../../ContextApi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {


  const {email,userSignOut}=useValue();
  const navigate=useNavigate();

  const handleLogin=()=>{
    navigate('/auth');
  }
  const handleSignOut=()=>{
    userSignOut();
    
  }

  return (
   <>
    <nav className={styles.Navbar}>
      <div className={styles.logoDiv}>
        <Link className={styles.logo} to="/">
          <p className={styles.sName}>Senior Flex</p>
          <img src={LogoImage} alt="Logo" />
        </Link>
      </div>
      <div className={styles.MenuDiv}>
        <Link to='/' className={styles.MenuItem}>Playlist</Link>
        <div className={styles.MenuItem}>Contact</div>
        <Link to="/:id" className={styles.MenuItem}>Videos</Link>
        <div className={styles.MenuItem} >{email?<p onClick={handleSignOut} id={styles.id}>SingOut</p>:<p onClick={handleLogin} id={styles.ids}>LogIn</p>}</div>
      </div>
      
    </nav>
   </>
  );
}
