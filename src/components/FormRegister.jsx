import React from "react";
import './styles/FormRegister.css';
import tortuga from '../pages/resources/tortuga.png'
import {useForm} from "react-hook-form";

const FormRegister = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div className="formRegister">
            <div className="formRegister_image">
                <img src={tortuga} alt="" />
            </div>
            
            <div className="formRegister_title">
                <h2>Registro de usuario</h2>
            </div>
            
            <form className="formRegister_form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input type="text" 
                        laceholder="Crea tu nombre de usuario" 
                        className="form-control" 
                        name="username"
                        {...register('username', {
                            required:true
                        })}/>
                </div>

                <div className="formRegister_form-names">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <div className="inputName">
                            <input type="text" placeholder="Nombre" className="form-control"
                            name="name"
                             {...register('name', {
                                required:true
                            })}/>
                        </div>
                    </div>
                    
                    <div className="formRegister_form-names-surname">
                        <label htmlFor="">Apellido</label>
                        <div className="inputName">
                            <input type="text" placeholder="Apellido" className="form-control"  
                            name="surname"
                            {...register('surname', {
                            required:true,
                            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
                        })}/>
                        </div>
                    </div>
                </div>


                <div></div>
                <div></div>
                
                <label htmlFor="">Correo electronico</label>
                <div className="inputName">
                    <input type="email" placeholder="user@example.com" className="form-control"
                    name="email"
                    {...register('email', {
                    required:true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
                })} 
                    />
                </div>

                <label htmlFor="">Contraseña</label>
                <div className="inputPassword">
                    <input type="password" placeholder="Tu contraseña" className="form-control" />
                </div>

                <label htmlFor="">Confirmación de contraseña</label>
                <div className="inputName">
                    <input type="password" className="form-control" />
                </div>

                <div className="divButton">
                    <input type="submit" className="btn btn-secondary" value="Registrar" />
                </div>

                <a href="">¿Tienes usuario? Iniciar Sesion</a>
            </form>


        </div>
    )
};

export default FormRegister;