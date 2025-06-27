import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';
import Loading from '../Pages/Loading';
// import Loading from '../Pages/Loading';

const Privetroute = ({children}) => {
const location =useLocation()
// console.log(location)
const {users,looading} = useContext(Valuecontext)


console.log(users)

if (looading)
{
    return <Loading></Loading>
}

if (users && users?.email)
{
    return children
}

return   <Navigate state={location.pathname} to='/Login'></Navigate>
   
};

export default Privetroute;