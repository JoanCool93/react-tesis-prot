import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../action/ui';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmail } from '../../action/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        name: 'Antonio',
        email: 'josek106@gmail.com',
        password: 123456,
        password2: 123456
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ){
            dispatch( startRegisterWithEmail( email, password, name ) );
        }
    }

    const isFormValid = () => {
        if( name.trim().length === 0 ) {
            dispatch( setError('Name is required') );
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError('Email is not valid') );
            return false;
        } else if ( password.length < 6){
            dispatch( setError('Password should be at least 6 characters') );
            return false;
        } else if ( password !== password2 ){
            dispatch( setError('Password doesn´t match') );
            return false;
        }
        dispatch( removeError() );
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                { 
                    msgError &&
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input className="auth__input" type="text" 
                    placeholder="Name" name="name" value={ name }
                    autoComplete="off" onChange={ handleInputChange } />
                <input className="auth__input" type="text" 
                    placeholder="Email" name="email" value={ email }
                    autoComplete="off" onChange={ handleInputChange } />
                <input className="auth__input" type="password" 
                    placeholder="Password" name="password" 
                    value={ password } onChange={ handleInputChange } />
                <input className="auth__input" type="password" 
                    placeholder="Confirm Password" name="password2" 
                    value={ password2 } onChange={ handleInputChange } />
                <button className="btn btn-primary btn-block mb-5" 
                    type="submit" /* onClick={ handleRegister } */>
                    Register
                </button>

                {/* <Link className="link mt-5" to="/auth/login">
                    Already registered?
                </Link> */}
            </form>
        </>
    )
}