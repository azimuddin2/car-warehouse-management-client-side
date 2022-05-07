import React, { useRef } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/checkout');
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const navigateRegister = () => {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            Toast('Sent email');
        }
        else{
            Toast('Please enter your email address!');
        }
    }


    return (
        <div className='form bg-light p-5 mt-5'>
        <h1 className='text-success text-center mb-4'>Please Login</h1>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button className='form-btn d-block mx-auto' variant="success" type="submit">Login</Button>
        </Form>
        {errorElement}
        <p className='mt-3 text-center'>New to Genius Car?<br /> <Link to={'/register'} className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        <p className='mt-3 text-center'>Forget Password? <button className=' btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
    );
};

export default Login;