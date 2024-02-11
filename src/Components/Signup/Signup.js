import React, { useState } from "react";
import styles from "./Signup.module.css";
import InputControl from "../Input-control/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";


function Signup() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, seterrorMsg] = useState("");
  const [submitbuttondisable, setsubmitbuttondisable] = useState(false);

  const handlesubmit = () => {
    if (!values.name || !values.email || !values.pass) {
      seterrorMsg("All Fields are required");
      return;
    }
    seterrorMsg("");
    setsubmitbuttondisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(
      async (res) => {
        setsubmitbuttondisable(false)
        const user = res.user;
       await updateProfile(user, {
          displayName : values.name,
        });
        navigate("/")
        console.log(res);
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
        <h1 className={styles.heading}>SignUP</h1>

        <InputControl
          label="Name"
          placeholder="Enter your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter your Email Address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter your Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handlesubmit} disabled={submitbuttondisable}>
            Signup
          </button>
          <p>
            Already have an account.{""}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
