import React, { useState } from "react";
import './styles/FormLogin.css';
import tortuga from '../pages/resources/tortuga.png'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { userValidator } from "./UserValidator";

const FormLogin = () => {

    const [miLogin, setLogin] = useState("false");
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");



    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = (e) => {
        //e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if (userValidator(txtusu, txtpas)=== 200) {
            setLogin("true");
            console.log("Login exitoso");
        } else {
            console.log("Login recibido");
            document.getElementById("txtusu").value = "";
            document.getElementById("txtpas").value = "";
            document.getElementById("txtusu").focus();
        }

    }

    return (
        <div className="formLogin">
            <img src={tortuga} alt="" />
            <h2>Iniciar Sesion </h2>
            <form className="formLogin_form" id="formLoginForm" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input name="username" id="txtusu" type="text" className="form-control" {...register(
                        'username', {
                        required: {
                            value: true,
                            message: "El campo es requerido"
                        },
                        minLength: {
                            value: 3,
                            message: "Cantidad minima de caracteres 3"
                        }
                    })}
                        onChange={(e) => setUsu(e.target.value)} />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input name="passwordd" type="password" id="txtpas" onChange={(e) => setPas(e.target.value)} className="form-control" {...register('passwordd', {
                        required: {
                            value: true,
                            message: "El campo es requerido"
                        },
                        minLength: {
                            value: 3,
                            message: "Cantidad minima de caracteres: 3"
                        }
                    })} />
                    {errors.passwordd && <span>{errors.passwordd.message}</span>}
                </div>


                <div className="divButton">
                    <input type="submit" name="submit" className="btn btn-secondary" value="Enviar" onClick={onSubmit} />
                </div>
                <Link to={'/register'}>
                    <a href="">Registrarse</a>
                </Link>
                <a href="">Olvide mi contraseña</a>
            </form>


        </div>
    )
};

export default FormLogin;