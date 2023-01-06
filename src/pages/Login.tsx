import { useState } from 'react';
import logo from '../assets/lendsqr-logo.svg';
import pablo from '../assets/pablo-sign-in.svg';
import "../styles/css/Login.css";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='container login'>
      <section className='login__hero'>
        <div className='login__hero--logo'>
          <img aria-label='Sign in hero image' alt='Sign in hero' src={logo} />
        </div>

        <div className='login__hero--img'>
          <img aria-label='Lendsqr Logo' alt='Sign in hero' src={pablo} />
        </div>
      </section>

      {/* form component */}
      <section className='login__form'>
        <div className='title'>
          <h1 className='text-6xl'>Welcome!</h1>
          <p className='text-xl'>Enter details to login</p>
        </div>
        <div className='form'>
          <div>
            <input className='input' type='email' placeholder='Email' />
          </div>

          <div className='passwordContainer'>
            <input
              className='input'
              type={show ? 'text' : 'password'}
              placeholder='Password'
            />
            {show ? (
              <button className='btn text-xl' onClick={() => setShow(!show)}>
                HIDE
              </button>
            ) : (
              <button className='btn text-xl' onClick={() => setShow(!show)}>
                SHOW
              </button>
            )}
          </div>
          <div>
            <button className='btn btn--forgot-password text-xl'>Forgot Password?</button>
          </div>
          <div>
            <button className='btn btn--login text-3xl'>LOG IN</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
