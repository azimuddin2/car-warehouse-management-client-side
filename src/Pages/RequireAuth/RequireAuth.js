import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    console.log(user)
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
        return <div className='text-center mt-5'>
            <h2 className='text-danger'>Your Email is not Verified!</h2>
            <h3 className='text-success'>Please Verify your email address</h3>
            <button
            className='btn btn-primary'
            onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }}
            >Send Verification Email Again</button>
        </div>
    }

    return children;
};

export default RequireAuth;