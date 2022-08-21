import React from 'react';
import { UserAuth } from '../context/AuthContext';


const Account = () => {
    const { logOut, user } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="googleDiv">
            <h1 className="googleDiv">{user?.displayName}'s Meeting Calendar</h1>

            {/* <button onClick={handleSignOut} className='googleDiv'>Logout</button> */}
        </div>
    );
};

export default Account;