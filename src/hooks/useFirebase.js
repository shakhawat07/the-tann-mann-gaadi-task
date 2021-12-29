import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, updateProfile, signOut, sendEmailVerification } from "firebase/auth";
import initializeAuthentication from '../FireBase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, phone, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setAuthError('');
                alert('User created successfully!');
                verifyEmail();
                const newUser = { email, password, displayName: name, phoneNumber: phone };
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                    phoneNumber: phone,
                }).then(() => {
                }).catch((error) => {
                    setAuthError(error.message);
                    alert('User already exist' + { authError });
                });
                history.replace('/courses');
            })
            .catch((error) => {
                setAuthError(error.message);
                alert('User already exist');
                // console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                alert('Login successfully!');
                // const destination = location?.state?.from || '/';
                history.replace('/courses');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                alert('Mismatched email/password or user does not exist!');
                // window.location.reload(false);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // alert('Email already used!');
                console.log(result);
            })
    }

    // logout 
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Logged out');
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;