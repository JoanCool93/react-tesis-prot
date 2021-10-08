import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleLogin } from '../../action/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector( state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        email: 'josek106@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
        
        <Router>
            <Redirect to="/dashboard" />    
        </Router>
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form>
                <input className="auth__input" type="text" 
                    placeholder="Email" name="email" 
                    autoComplete="off" value={ email } 
                    onChange={ handleInputChange } />
                <input className="auth__input" type="password" 
                    placeholder="Password" name="password" 
                    value={ password } onChange={ handleInputChange } />
                <button className="btn btn-primary btn-block" 
                    type="submit" onClick={ handleLogin }
                    disabled={ loading }>
                    Login
                </button>

                <hr />

                <div className="auth__social-networks">
                    <p>Login with Social Networks</p>
                    <div className="google-btn" onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                {/* <Link className="link" to="/auth/register">
                    Create new account
                </Link> */}
            </form>
        </>
    )
}