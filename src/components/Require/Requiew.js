import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseKey/Key'


const Requiew = ({children}) => {

    const [user , loading] = useAuthState(auth)




    return (
        children
    );
};

export default Requiew;