import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../FirebaseKey/Key'
import Loading from '../Loading/Loading';


const Requiew = ({children}) => {

    const [user , loading] = useAuthState(auth)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login-signup" state={{ from: location }} replace />;
      }

    return (
        children
    );
};

export default Requiew;