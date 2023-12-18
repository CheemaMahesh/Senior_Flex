import { useState, createContext,useEffect, useContext } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
// import { data } from '../src/Components/Assets/Data';
import {data} from '../src/Componets/Assets/Data'

const Con = createContext();

function useValue() {
  const value = useContext(Con);
  return value;
}

function ContextApi({ children }) {
  const [pageCount, setPageCount] = useState(0);
  const [email,setEmail]=useState(null);
  const [isClicked, setIsClicked] = useState(false); // Update here


  const handleClick = (e = 0) => {
    setPageCount(e);
   
  };


//==================================User SignOut===================================
const userSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Signout was Successful");
    })
    .catch((err) => {
      console.error("Signout error:", err);
    });
};

// ====================================================Getting the userId and email when the user signs in
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setEmail(user.email);
    } else {
      setEmail(null);
    }
  });
}, []);
  

  return (
    <Con.Provider value={{ data, pageCount, handleClick, email, userSignOut, isClicked, setIsClicked}}>
      {children}
    </Con.Provider>
  );
}

export { useValue };
export default ContextApi;
