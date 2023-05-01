import React from "react";
import './styles/FormLogin.css';

const FormLogin = () =>{
    return(
        <div className="formLogin">
            <img src="https://cdn-icons-png.flaticon.com/512/3917/3917705.png" alt="" />
            <h2>Iniciar Sesion</h2>
            <p>Usuario</p>
            <input type="text" />
            <p>Contraseña</p>
            <input type="password" />
            <button className="btn btn-primary">Entrar</button>
            <a href="">Registrarse</a>
            <a href="">Olvide mi contraseña</a>

        </div>
    )
};

export default FormLogin;