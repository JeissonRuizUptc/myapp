import React from "react";
import './styles/FormRegister.css';
import tortuga from '../pages/resources/tortuga.png'

const FormRegister = () => {
    return (
        <div className="formRegister">
            <div className="formRegister_image">
                <img src={tortuga} alt="" />
            </div>
            
            <div className="formRegister_title">
                <h2>Registro de usuario</h2>
            </div>
            
            <div className="formRegister_form">

                <label htmlFor="">Usuario</label>
                <div className="inputName">
                    <input type="text" placeholder="Crea tu nombre de usuario" className="form-control" />
                </div>

                <div className="formRegister_form-names">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <div className="inputName">
                            <input type="text" placeholder="Nombre" className="form-control" />
                        </div>
                    </div>
                    
                    <div className="formRegister_form-names-surname">
                        <label htmlFor="">Apellido</label>
                        <div className="inputName">
                            <input type="text" placeholder="Apellido" className="form-control" />
                        </div>
                    </div>
                </div>


                <div></div>
                <div></div>
                
                <label htmlFor="">Correo electronico</label>
                <div className="inputName">
                    <input type="email" placeholder="user@example.com" className="form-control" />
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
                    <a href="https://www.google.com/webhp?hl=es&ictx=2&sa=X&ved=0ahUKEwiUzcan_dT-AhWaTjABHWFeBEoQPQgJ">
                        <button className="btn btn-secondary">Entrar</button>
                    </a>

                </div>

                <a href="">¿Tienes usuario? Iniciar Sesion</a>
            </div>


        </div>
    )
};

export default FormRegister;