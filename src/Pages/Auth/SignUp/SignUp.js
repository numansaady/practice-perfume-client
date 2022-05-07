import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
      });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <PageTitle title="Sign Up"></PageTitle>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />


                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Allow update notification about new perfume! </label>
                <input
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Sign Up" />
            </form>
            <p>Have an account? <br /> <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Go to Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;