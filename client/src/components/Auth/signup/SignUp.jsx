import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import './SignUp.scss';

const SignUp = () => {
    const [ checkedSignup, setCheckedSignup ] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

    const handleSignup = async (event) => {
      event.preventDefault();
      try {
        console.log(username);
        console.log(password);
        const response = await axios.post('/signup', {
          username,
          password,
        });
        
        if (response.data.success) {
          notifySuccess('You signup successfully');
          setUsername('');
          setPassword('');
          setConfirmPassword('');
          setCheckedSignup(false);
          navigate('/login')
        } else {
          notifyError(response.data.error);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        notifyError('Error during signup. Please try again.');
      }
    };
    
  return (
    <section className="signup__section">
      <form className="signup" onSubmit={handleSignup}>
        <h1>SignUp</h1>
        <div className='username-side'>
          <input 
          type="text" 
          name='username' 
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          placeholder=' ' 
          required/>
          <label className="transformed">Username</label>
        </div>
        <div className="password-side">
          <input 
          type={`${!checkedSignup ? "password" : "text"}`} 
          name='password' 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder=' ' 
          required/>
          <label className="transformed" htmlFor="#password">Password</label>
        </div>

        <div className="password-side">
          <input 
          type={`${!checkedSignup ? "password" : "text"}`} 
          name='confirmed_password' 
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
          placeholder=' ' 
          required/>
          <label className="transformed">Confirm Password</label>
        </div>
        <div className="check-password">
          <div>
            <input type="checkbox" name="" id="signup_password_check" onChange={() => {
              setCheckedSignup(!checkedSignup)
            }}/>
            <label htmlFor="signup_password_check">Show Password</label>
          </div>
          <p>
            Already have an account?
            <a href='/login'>Login</a>
          </p>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  )


}

export default SignUp
