import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";

import InputControl from "../Input-control/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, seterrorMsg] = useState("");
  const [submitbuttondisable, setsubmitbuttondisable] = useState(false);

  const handlesubmit = () => {
    if (!values.email || !values.pass) {
      seterrorMsg("All Fields are required");
      return;
    }
    seterrorMsg("");
    setsubmitbuttondisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(
      async (res) => {
        setsubmitbuttondisable(false)
       
        navigate("/")
      }
    ).catch((err) =>{
      setsubmitbuttondisable(false);
      seterrorMsg(err.message);
      console.log("Error",err.message);
    })
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl lable="Email" placeholder= "Enter your Email" onChange={event =>setValues(prev =>({...prev,email:event.target.value}))}/>

        <InputControl lable="Password" placeholder= "Enter your Password" onChange={event =>setValues(prev =>({...prev,pass:event.target.value}))}/>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
            <button onClick={handlesubmit}
            disabled={submitbuttondisable}>Login</button>
            <p>New User! Create Account.{""} &nbsp;
            <span>
               <Link to="/Signup">SignUp</Link>
            </span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
