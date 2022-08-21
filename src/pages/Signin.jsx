import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate('/account');
        }
    }, [user]);

    return (
        <div>

            <h3 className="googleDiv">Use Google Button to sign in with your Headstarter e-mail!</h3>
            <div className="googleButton">
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    );
};

export default Signin;