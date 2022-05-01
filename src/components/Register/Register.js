import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register now</h3>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;