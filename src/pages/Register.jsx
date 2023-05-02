import React from "react";
import  './styles/Register.css';
import FormRegister from "../components/FormRegister";
import wallpaper from './resources/wallpaperRegister.png';

const Register = () => {
    return (
        <div>
            <div className="Register">
                <div className="Register-image">
                    <img src={wallpaper} alt="" />
                </div>
                <div className="Register-form">
                    <FormRegister/>
                </div>
            </div>
        </div>

    )
};

export default Register;