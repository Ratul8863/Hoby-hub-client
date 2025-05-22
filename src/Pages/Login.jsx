import React, { useContext } from 'react'
import { Link } from 'react-router'
import { Valuecontext } from '../Root/Root';
import { toast } from 'react-toastify';

function Login() {

const {handlelogin,handlegoogle} = useContext(Valuecontext)

  const handlesubmit = (e)=> {
        e.preventDefault();
        const formdata = new FormData(e.target);
    const inputdata = Object.fromEntries(formdata.entries());
    console.log(inputdata);
    console.log(inputdata.Password)

        // console.log(email,Password)
        
        handlelogin(inputdata.email,inputdata.Password)
        .then(result => {
            // const user = result.user;
            // console.log(user)
            toast.success("Log in Successful");
            // alert("Log in Successful")
          // navigate(`${location.state ? location.state : "/"}`)
          
            
          })
          .catch(error => {
            const errorc=error.message;
            // console.log(errorc)
            // seterrormsg(errorc)
      console.log(errorc)
            alert("Invalid email or password")

         
          });
    
    }




  return (
    <div>
       <form onSubmit={handlesubmit} className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mb-10">
        <div className="card-body">
          <h1 className='text-center text-xl py-2 font-bold text-[#403F3F]'>Login your account</h1>

          <button  aria-label="Login with Google" type="button" className=" btn btn-outline btn-secondary flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
          {/* <FaGoogle /> Login with Google */}
		</button>

    <div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
          <fieldset className="fieldset space-y-2">
            <label className="font-bold text-[#403F3F]">Email address</label>
            <input type="email" name='email'
             className="input" 
             placeholder="Enter your email address" 
              required />
  
            <label  className="font-bold text-[#403F3F]">Password</label>
  
            <input type="password" name='Password'
             className="input" 
             placeholder="Enter your Password" 
             required />
  
            <div><a className="link link-hover">Forgot password?</a></div>

  <button type='Submit' className="btn btn-neutral mt-4">Login</button>

          
            <p>Dont’t Have An Account ? <Link state={location.state} className='text-secondary' to='/Register'>Register</Link></p>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default Login
