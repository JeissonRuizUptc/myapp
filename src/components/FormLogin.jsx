import React from "react";
import './styles/FormLogin.css';
import tortuga from '../pages/resources/tortuga.png'

const FormLogin = () => {
    return (
        <div className="formLogin">
            <img src={tortuga} alt="" />
            <h2>Iniciar Sesion</h2>
            <div className="formLogin_form">

                <label htmlFor="">usuario</label>
                <div className="inputName">
                    <input type="text" className="form-control" />
                </div>
                
                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input type="password" className="form-control" />
                </div>
                

                <div className="divButton">
                    <button className="btn btn-primary">Entrar</button>
                </div>
                
                <a href="">Registrarse</a>
                <a href="">Olvide mi contraseña</a>
            </div>


        </div>
    )
};

export default FormLogin;