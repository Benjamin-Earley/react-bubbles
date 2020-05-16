import React, { useState } from "react";
import api from '../axiosAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [err, setErr] = useState();
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api().post('/api/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(err => {
        setErr(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='username'
          value={data.username}
          onChange={handleChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          value={data.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
