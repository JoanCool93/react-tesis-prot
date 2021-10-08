import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types"
import { startLoading, finishLoading } from './ui';

export const startLoginEmailPassword = ( email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );
        const auth = getAuth();
        signInWithEmailAndPassword( auth, email, password)
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ));
                
                dispatch( finishLoading() );
            }).catch( e => {
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            });
    };
};

export const startRegisterWithEmail = ( email, password, name ) => {
    return ( dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword( auth, email, password)
            .then( async ({ user }) => {

                await updateProfile( user, { displayName: name });
                dispatch( login( user.uid, user.displayName) );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup( auth, googleAuthProvider)
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName)
                );
            });
    }
}

export const login = (uid, displayName) => {
    return { 
        type: types.login,
        payload: {
            uid,
            displayName
        }
    };
};

export const startLogout = () => {
    return (dispatch) =>{
        const auth = getAuth();
        signOut( auth);
        dispatch( logout() );
    }
};

export const logout = () => ({
    type: types.logout
});