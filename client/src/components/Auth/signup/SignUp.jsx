import { useState } from 'react';
import './SignUp.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [ checkedSignup, setCheckedSignup ] = useState(false);
    // const navigate = useNavigate();

  return (
    <section className="signup__section">
      <form className="signup" action='/signup' method='post'>
        <h1>SignUp</h1>
        <div className='username-side'>
          <input type="text" name='username' placeholder=' '/>
          <label className="transformed">Username</label>
        </div>
        <div className="password-side">
          <input type={`${!checkedSignup ? "password" : "text"}`} name='password' placeholder=' '/>
          <label className="transformed" htmlFor="#password">Password</label>
        </div>

        <div className="password-side">
          <input type={`${!checkedSignup ? "password" : "text"}`} name='confirmed_password' placeholder=' '/>
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
