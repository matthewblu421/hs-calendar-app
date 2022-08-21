import React from "react";
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import hslogo from "../assets/hslogo.png"

const Navbar = () => {
    const { user, logOut } = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className="navContainer">
            <h1 className="navBar">
                <img src={hslogo} alt="Headstarter Logo" style={{ marginLeft: "20px", marginTop: "10px" }} />

            </h1>
            {user?.displayName ? (<button className="navRightside" onClick={handleSignOut}>Logout</button>) : (<Link className="navRightside" to='/signin'>Sign in</Link>)}


        </div>
    )
}

export default Navbar;  