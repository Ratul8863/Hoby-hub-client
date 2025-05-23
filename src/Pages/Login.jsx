import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handlelogin, handlegoogle } = useContext(Valuecontext);

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, Password } = Object.fromEntries(formData.entries());

    handlelogin(email, Password)
      .then(() => {
        toast.success('Login successful!');
        navigate(location.state || '/');
      })
      .catch((error) => {
        console.error(error.message);
        toast.error('Invalid email or password.');
      });
  };

  const handleg = () => {
    handlegoogle()
      .then(() => {
        toast.success('Google login successful!');
        navigate(location.state || '/');
      })
      .catch((error) => {
        console.error(error.message);
        toast.error('Google login failed.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4  dark:bg-gray-950 dark:border-gray-600 dark:text-white">
        <Helmet>
              <title>Hobby-Hub | Login</title>
             </Helmet>
      <form
        onSubmit={handlesubmit}
        className="card bg-base-100  w-full max-w-sm shadow-2xl"
      >
        <div className="card-body">
          <h1 className="text-center text-xl font-bold text-[#403F3F] mb-4">
            Login to Your Account
          </h1>

          <button
            onClick={handleg}
            type="button"
            className="btn btn-outline btn-secondary flex items-center justify-center w-full mb-4"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>

          <div className="flex items-center w-full my-2">
            <hr className="w-full text-gray-400" />
            <span className="px-3 text-gray-600">OR</span>
            <hr className="w-full text-gray-400" />
          </div>

          <fieldset className="space-y-3">
            <div>
              <label className="font-bold text-[#403F3F]">Email address</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full text-[#403F3F]"
                placeholder="Enter your email"
                required
                
                
              />
            </div>

            <div>
              <label className="font-bold text-[#403F3F] ">Password</label>
              <input
                type="password"
                name="Password"
                className="input input-bordered w-full text-[#403F3F]"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-sm text-right">
              <a href="#" className="link link-hover text-blue-500">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-neutral w-full mt-2">
              Login
            </button>

            <p className="text-center  text-sm mt-2 text-[#403F3F] ">
              Don’t have an account?{' '}
              <Link
                state={location.state}
                className="text-red-600 underline"
                to="/Register"
              >
                 Register
              </Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Login;
