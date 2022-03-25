import React from 'react';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './Login.css';

const Login = () => {
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
                    <input type="text" />
                </div>

                <div className="form-field">
                    <label>Password</label>
                    <input type="text" />
                </div>

                <div className="form-field">
                    <p className="term-condition">
                       <small>By continuing, you agree to eShop's Conditions of Use and Privacy Notice.</small> 
                    </p>
                </div>
                <div className="form-field">
                    <button className="login-btn">Login</button>
                </div>
            </div>
            <div className="login-footer">
                <div className="form-field">
                    <button className="register-btn">Create your eShop Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login;