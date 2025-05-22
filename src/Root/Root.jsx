import React, { createContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer.jsX'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

export const Valuecontext = createContext();

function Root() {

 const [looading, setLooading] = useState(true);
const handlelogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const handlesignup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const handlevalues = {
    handlelogin,
    handlesignup,
    // users,
    // handlesignout,
    // looading,
    // setLooading,
    // updateuser,
    // setusers,
    // handlegoogle,
  };


  return (
    <>
     <Valuecontext.Provider value={handlevalues}>

         <div className='max-w-[1400px] mx-auto'>
    
        <Navbar />
        
        {/* {looading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
          </div>
        ) : ( */}
          <Outlet />
        {/* )} */}
        
        
   
    </div>
    <Footer />


     </Valuecontext.Provider>
 
    </>
  )
}

export default Root
