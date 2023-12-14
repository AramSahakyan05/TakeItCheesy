import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

import axios from 'axios';

import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ checkedLogin, setCheckedLogin ] = useState(false);
  const navigate = useNavigate();

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const response = await axios.post('/login', {
        username,
        password,
      });
      if (response.data.success) {
        console.log(response.data.success);
        notifySuccess("You login successfuly");
        setUsername('');
        setPassword('');
        setCheckedLogin(false);
        navigate('/home')
      } else {
        notifyError(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      notifyError("Something went wrong, try again");
    }
  };

  return (
    <section className="login__section">
      <form className="login" onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className='username-side'>
          <input 
          type="text" 
          id="username" 
          name='username' 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          placeholder=' ' 
          required/>
          <label className="transformed" htmlFor="#username">Username</label>
      </div>
      <div className="password-side">
          <input 
          type={`${!checkedLogin ? "password" : "text"}`} 
          id="password" 
          name='password' 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder=' ' 
          required/>
          <label className="transformed" htmlFor="#password">Password</label>
      </div>
      <div className="check-password">
          <div>
            <input type="checkbox" name="" id="login_password_check" onChange={() => {
              setCheckedLogin(!checkedLogin)
            }}/>
            <label htmlFor="login_password_check">Show Password</label>
          </div>
          <p>
              Don't have an account?
              <a href='/signup'>Signup</a>
          </p>
       </div>
      <button type="submit">Login</button>
     </form>
    </section>
  )
}

export default Login
