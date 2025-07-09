import React, { useEffect,useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLazyCheckauthQuery } from '../api/protectedApi'



const ProtectedRoute = ({children}) => {
    const [isAuthenticated,setIsAuthenticated]=useState(null)

    const[CheckAuth,result]=useLazyCheckauthQuery();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const res = await CheckAuth().unwrap(); // unwrap to throw on error
                
                if (res.status==200) {
                setIsAuthenticated(true);
            } 
                else {
                setIsAuthenticated(false);
                }
            } 
            catch (err) {
                console.log(err)
                setIsAuthenticated(false);
                
            }
            };

        checkAuthStatus();
  }, []);

    if (isAuthenticated === null) {
    return <div>Loading...</div>;
    }
    console.log(isAuthenticated)
    return isAuthenticated?children:<Navigate to='/signup'/>
}

export default ProtectedRoute
