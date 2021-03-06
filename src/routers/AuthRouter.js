import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { LoginScreen } from '../components/auth/LoginScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                
                <Switch>
                    <Route path= '/auth/login' component={ LoginScreen } />
                    <Route path= '/auth/register' component={ RegisterScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}
