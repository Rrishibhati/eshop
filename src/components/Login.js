import React, { useState, useEffect } from 'react';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase/Firebase';
import { isLogin } from './DataLayer/reducer';

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let isLoginStatus = isLogin();
        if (isLoginStatus) {
            navigate('/');
            return;
        }
        return isLoginStatus;
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        let result = {};
        try {
            result = await signInWithEmailAndPassword(auth, email, password);
            if (result?.user) {
                let user_session = JSON.stringify({ email });
                localStorage.setItem('user', user_session);
                navigate('/');
            }
        } catch {
            alert('Invalid email & password');
            return;
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        let result = {};
        try {
            result = await createUserWithEmailAndPassword(auth, email, password);
            if (result?.user) {
                alert('Account created successfully!');
            }
        } catch {
            alert('Email address already exist');
            return;
        }
    }

    return (
        <div className="login">
            <div className="login-header">
                <StorefrontIcon className='login-logo-icon' />
                <span className="login-logo-title">eShop</span>
            </div>
            <div className="login-body">
                <h1 className="login-heading">Sign-In</h1>
                <div className="form-field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-field">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-field">
                    <p className="term-condition">
                        <small>By continuing, you agree to eShop's Conditions of Use and Privacy Notice.</small>
                    </p>
                </div>
                <div className="form-field">
                    <button type="submit" onClick={handleSignIn} className="login-btn">SignIn</button>
                </div>
            </div>
            <div className="login-footer">
                <div className="form-field">
                    <button onClick={handleRegister} className="register-btn">Create your eShop Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login;