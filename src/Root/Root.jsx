import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer.jsX'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

export const Valuecontext = createContext();

function Root() {
 const [users, setusers] = useState(null);
 console.log(users);
 const [looading, setLooading] = useState(true);
const handlelogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const handlesignup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

   const handlesignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Sign Out Successful");
        // navigate('/Login');
      })
      .catch((error) => {
        // console.log(error);
      });
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setusers(user);
      setLooading(false);
    });
    return () => unsubscribe();
  }, []);


   const updateuser = (updated) => updateProfile(auth.currentUser, updated);
  const provider = new GoogleAuthProvider();
  const handlegoogle = () => signInWithPopup(auth, provider);



  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Apply theme to <html> tag
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

const handlevalues = {
    handlelogin,
    handlesignup,
    users,
    handlesignout,
    looading,
    setLooading,
    updateuser,
    setusers,
    handlegoogle,
    setTheme,
    theme
  };


  return (
  <div className=' dark:bg-gray-900 dark:text-white'>
 <Valuecontext.Provider value={handlevalues} >

         <div className='max-w-[1400px] mx-auto '>
    
        <Navbar  />
        
        {looading ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
          </div>
        ) : (
          <Outlet />
         )} 
        
        
   
    </div>
    <Footer />


     </Valuecontext.Provider>
  </div>
    
 
    
  )
}

export default Root
