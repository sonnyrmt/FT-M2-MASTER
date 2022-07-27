import React from 'react';
import { useState } from "react-router-dom";

export default function Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  const [error, setError] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

  }

  const validate = (input) => {
    let errors = {};
        
    if(!input.username){
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid'
    }


    if(!input.password) {
      errors.password = 'Password is required'
    } else if ((!/(?=.*[0-9])/.test(input.password))) {
      errors.password = 'Password is invalid'
    }

    return errors;
  };

  return (
      <form action="">
        <div>
          <label>Username</label>
          <input type="text"  name='username' onChange={handleInputChange} value={input.username}/> 
          {error.username ? <p>{error.username}</p> : null}
          <br />
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
          {error.password ? <p>{error.password}</p> : null}
          <br />
          <input type="submit" />
        </div>
      </form>
  )
}
