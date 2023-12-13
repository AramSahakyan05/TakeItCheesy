import { useState } from 'react';
import { useNavigate, useHistory } from "react-router-dom";
import Error from '../../Error/Error';
import axios from 'axios';
import './Login.scss';

const Login = () => {
  const [ checkedLogin, setCheckedLogin ] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="login__section">
      <form className="login" action='/login' method='POST'>
      <h1>Login</h1>
      <div className='username-side'>
          <input type="text" id="username" name='username' placeholder=' ' required/>
          <label className="transformed" htmlFor="#username">Username</label>
      </div>
      <div className="password-side">
          <input type={`${!checkedLogin ? "password" : "text"}`} id="password" name='password' placeholder=' ' required/>
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
