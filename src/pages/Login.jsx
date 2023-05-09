import React from "react";
import  './styles/Login.css';
import FormLogin from "../components/FormLogin";
import wallpaper from './resources/wallpaper.jpg';
import axios from 'axios';

const Login = () => {

    return (
        <div>
            <div className="Login">
                <div className="Login-image">
                    <img src={wallpaper} alt="" />
                </div>
                <div className="Login-form">
                    <FormLogin/>
                </div>
            </div>
        </div>

    )
};

export default Login;