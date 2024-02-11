import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {signOut } from "firebase/auth";
import styles from "./Home.module.css";

function Home(props) {

    const [logout,setlogout] = useState("")
 
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        setlogout("Succesfully Logeed Out")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className={styles.buttons} >
        <button>
          <Link to="/login" className={styles.link}> Login</Link>
        </button>
        {/* <br /> */}
        <button>
          <Link to="/Signup" className={styles.link}>SignUp</Link>
        </button>
      <button onClick={handlesignout} >Log Out</button>
      </div>

      <br />
      <br />
      <h2 className={styles.loginmessage}>{props.name ? `Welcome - ${props.name}` : "Login-please"}</h2>
      <h2 className={styles.logoutmessage}>{logout}</h2>

    </>
  );
}

export default Home;
