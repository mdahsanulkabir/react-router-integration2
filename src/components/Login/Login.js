import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/"; 
        //this will keep the location in memory where the user came from

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then( () => {
            navigate(from, { replace: true });  //replace:true means this 
            //login page will not be in the history
        })
    }
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin : '20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
            <form>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;