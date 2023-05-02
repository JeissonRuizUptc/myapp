import React from "react";
import './styles/FormLogin.css';
import tortuga from '../pages/resources/tortuga.png'
import { Link } from "react-router-dom";

const FormLogin = () => {
    return (
        <div className="formLogin">
            <img src={tortuga} alt="" />
            <h2>Iniciar Sesion</h2>
            <div className="formLogin_form">

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input type="text" className="form-control" />
                </div>

                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input type="password" className="form-control" />
                </div>


                <div className="divButton">
                    <Link to="/register">
                        <button className="btn btn-secondary">Entrar</button>
                    </Link>
                    
                </div>

                <a href="">Registrarse</a>
                <a href="">Olvide mi contraseña</a>
            </div>


        </div>
    )
};

export default FormLogin;