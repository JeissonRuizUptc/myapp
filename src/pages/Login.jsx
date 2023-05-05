import React from "react";
import  './styles/Login.css';
import FormLogin from "../components/FormLogin";
import wallpaper from './resources/wallpaper.jpg';
import axios from 'axios';

const Login = () => {

    const baseUrl = 'http://192.190.42.194:5003/api/Users/Register'

    const getAll = () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.datos)
    }

    const datos = [
        { username: 'dany', name: 'daniel', surname: 'ruiz', correo: 'example@gmail.com', password: 123},
        { username: 'jei', name: 'jeisson', surname: 'lizarazo', correo: 'example2@gmail.com', password: 123}
    ]

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