import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError, signInWithGoogle } =
      useAuth();
  
    const location = useLocation();
    const history = useHistory();
  
    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
      registerUser(loginData.email, loginData.password, loginData.name, history);
      e.preventDefault();
    };
    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
    };
    return (
        <div className='login-area py-5'>
            
            <div className="container">
        <div>
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2 className='text-center'>REGISTER</h2>
            <input
              placeholder="Enter your name"
              className="form-control mb-4"
              type="text"
              name="name"
              onBlur={handleOnChange}
              required
            />
            <input
              placeholder="Enter your email"
              className="form-control mb-4"
              type="email"
              name="email"
              onBlur={handleOnChange}
              required
            />
            <input
              type="password"
              name="password"
              onBlur={handleOnChange}
              placeholder="Enter your password"
              className="form-control mb-4"
              required
            />

            <button className="btn btn-success" type="submit">
              Register
            </button>
            <div className="mx-auto" style={{ maxWidth: "350px" }}>
              {isLoading &&  <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>}
              {user?.email && <p>User Created successfully!</p>}
              {authError && <p className='mb-0 text-danger mt-2'>{authError}</p>}
            </div>
          </form>

          <h6 className="my-3 text-center">
            Already Registered? <Link to="/login">Login</Link>
          </h6>
          <div class="text-center">
            <button
              className="btn btn-danger mx-auto"
              onClick={handleGoogleSignIn}
            >
              <i className="fab fa-google"></i> Google Sign In
            </button>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Register;