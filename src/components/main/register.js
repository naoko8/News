import React, { useState, useEffect } from 'react';
import '../../index.css'

const mystyle = {
  color: "red",
  backgroundColor: "white"
};

const Register = () => {
  const [registered, setRegistered] = useState(false);
  const [isFieldsValid, setIsFieldsValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const nameRegex = /^[A-Za-z]+( [A-za-z]+)*$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if (name === "") {
      setNameError(false);
    } else if (!nameRegex.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (email === "") {
      setEmailError(false);
    } else if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(false);
    } else if (!passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [
    name,
    email,
    password,
    nameError,
    emailError,
    passwordError
  ]);

  const register = () => {
    setRegistered(true);
  };

  

  return registered ? 
          <p>Successfully registered!</p>
          : (
            <div className='wrapper'>
              <div className='form-wrapper'>
                <h2>Register</h2>
                <form>
                  <div className='fullName'>
                    <label htmlFor="fullName">Full Name</label>
                    <input type='text' name='fullName' onChange={(e) => setName(e.target.value)} />
                    {nameError ? 
                    <p style={{ color: "red" }}> Please enter valid full name.</p>
                    : ""}
                  </div>
                  <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} />
                    {emailError ? (
                      <p style={{ color: "red" }}>
                        Please enter valid email.
                      </p>
                    ) :
                      ""}
                  </div>
              <div className='password'>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                {passwordError ? 
                    <p style={mystyle}> Please enter valid and strong password.</p>
                    : ""}
              </div>
              <div className='info'>
                <small>Password must be minimum eight characters in length. (Use alphabet, digits and special characters).</small>
              </div>
              <div className='submit'>
                <button onClick={() => register()}>Create</button>
              </div>
            </form>
          </div>
        </div> )
}

export default Register;
