import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Valuecontext } from '../Root/Root';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

function Register() {
  const navigate = useNavigate();
  const { handlesignup, updateuser, setusers, handlegoogle } = useContext(Valuecontext);
  const [er, seter] = useState('');
  const location = useLocation();

  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const { name, photo, email, Password, ...restformdata } = Object.fromEntries(formdata.entries());

    if (Password.length < 6) {
      toast.error("Password must have 6 characters");
      seter('Password must have 6 characters');
      return;
    }
    if (!/[a-z]/.test(Password)) {
      toast.error("Password must have a lower case letter");
      seter('Password must have a lower case letter');
      return;
    }
    if (!/[A-Z]/.test(Password)) {
      toast.error("Password must have an upper case letter");
      seter('Password must have an upper case letter');
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(Password)) {
      toast.error("Password must have at least one special character");
      seter('Password must have at least one special character');
      return;
    }

    handlesignup(email, Password)
      .then(result => {
        const user = result.user;

        updateuser({ displayName: name, photoURL: photo })
          .then(() => {
            setusers({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {
            setusers(user);
          });
toast.success("Successfully Registered");
        const userprofile = {
          email,
          name,
          photoURL: photo,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime,
          ...restformdata,
        };

        fetch('http://localhost:4500/users', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userprofile),
        })
          .then(res => res.json())
          .then(data => {
            if (data._id) {
             
            }
          })
          .catch(() => {
            
          });

        navigate(location.state ? location.state : "/");
      })
      .catch(error => {
        console.error(error);
        toast.error("User allready exsit. Please login");
      });
  };

  const handleg = () => {
    handlegoogle()
      .then(() => {
        toast.success("Log in Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-gray-950 dark:border-gray-600 dark:text-white">
        <Helmet>
              <title>Hobby-Hub | Register</title>
             </Helmet>
      <form onSubmit={handlesubmit} className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mb-10 mt-10">
        <div className="card-body">
          <h1 className="text-center text-xl py-2 font-bold text-[#403F3F]">Register your account</h1>
          <fieldset className="fieldset space-y-2">
            <label className="font-bold text-[#403F3F]">Your Name</label>
            <input type="text" name="name" className="input text-[#403F3F]" placeholder="Enter your name" required />

            <label className="font-bold text-[#403F3F]">Email address</label>
            <input type="email" name="email" className="input text-[#403F3F]" placeholder="Enter your email address" required />

            <label className="font-bold text-[#403F3F]">Photo URL</label>
            <input type="text" name="photo" className="input text-[#403F3F]" placeholder="Enter your Photo URL" />

            <label className="font-bold text-[#403F3F]">Password</label>
            <input type="password" name="Password" className="input text-[#403F3F]" placeholder="Enter your Password" required />

            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>

            <button
              onClick={handleg}
              aria-label="Login with Google"
              type="button"
              className="btn btn-outline btn-secondary flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
              <FaGoogle /> Login with Google
            </button>

            <div><a className="link link-hover text-[#403F3F]">Forgot password?</a></div>
            <button type="submit" className="btn btn-neutral mt-4">Register</button>

            <p className="text-[#403F3F]">
              Already Have An Account? <Link className="text-secondary" to="/login">Login</Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Register;
