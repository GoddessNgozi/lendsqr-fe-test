import { useState } from 'react';
import logo from '../../assets/lendsqr-logo.svg';
import pablo from '../../assets/pablo-sign-in.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className='logo'>
    <img aria-label='Lendsqr logo' alt='Lendsqr logo' src={logo} />
    </div>

    <main className='container'>
      <section className='pablo-sign'>
          <img aria-label='Pablo sign-in' alt='Pablo sign-in' src={pablo} />
      </section>

      {/* form component */}
      <section className='login_form'>
        <div className='title'>
          <h1 className=''>Welcome!</h1>
          <p className=''>Enter details to login</p>
        </div>
        <form>
            <input type='email' placeholder='Email' />
            <div className='password'>
                <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            {showPassword ? (
              <button className='' onClick={() => setShowPassword(!showPassword)}>
                HIDE
              </button>
            ) : (
              <button className='' onClick={() => setShowPassword(!showPassword)}>
                SHOW
              </button>
            )}
          </div>
          <div>
            <button className=''>Forgot Password?</button>
          </div>
          <div>
            <button className=''>Log In</button>
          </div>
        </form>
      </section>
    </main>
    </>
  );
};

export default Login;
