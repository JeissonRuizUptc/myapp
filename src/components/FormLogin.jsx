import React ,{useState} from "react";
import './styles/FormLogin.css';
import tortuga from '../pages/resources/tortuga.png'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {userValidator} from "./UserValidator";

const FormLogin = () => {

    const [miLogin, setLogin] = useState("false");
    const [usu, setUsu] = useState("");  
    const [pas, setPas] = useState(""); 
    
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if(txtusu.leng===0 || txtpas===0){
            alert("llene los campos perezoso de mrda")
        }else{
            if(userValidator(txtusu, txtpas)){
                setLogin("true");
                alert("Login exitoso");
            }else{
                alert("Login paila mi pez");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();
            }
        }
    }


    const onSubmitUser = (data) =>{
        return data.username.onSubmit;
    }

    const onSubmitPassword = (data) =>{
        return data.username.onSubmit;
    }

    return (
        <div className="formLogin">
            <img src={tortuga} alt="" />
            <h2>Iniciar Sesion</h2>
            <form className="formLogin_form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input name="username" id="txtusu" type="text" onChange={(e)=>setUsu(e.target.value)} className="form-control" {...register('username', {
                        required: true,
                    })} />
                </div>

                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input name="passwordd" type="password" id="txtpas" onChange={(e)=>setPas(e.target.value)} className="form-control" {...register('passwordd', {
                    })} />
                </div>


                <div className="divButton">
                    <input type="submit" className="btn btn-secondary" value="Enviar" onClick={onSubmit}/>
                    
                </div>

                <a href="">Registrarse</a>
                <a href="">Olvide mi contraseña</a>
            </form>


        </div>
    )
};

export default FormLogin;