import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { login } from '../action/auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardScreen } from '../components/dashboard/DashboardScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged( auth, (user) => {
            if ( user?.uid ){
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            };
            setChecking(false);
        });
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if( checking ){
        return (
            <h1>Espere...</h1>
        );
    };

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path= '/auth' component={AuthRouter} isAuthenticated={isLoggedIn}  />
                    <PrivateRoute exact path= '/dashboard' component={DashboardScreen} isAuthenticated={isLoggedIn} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
