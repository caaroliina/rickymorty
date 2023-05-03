import style from "./Form.module.css"
import logo from "../../images/wannaDie.png"
import { useState } from "react";
// import { useDispatch } from 'react-redux';
import validation from "./validation";


// const validation = (user) =>{
//     const errors ={}
//     if(!validationEmail) errors.email = "hay errores en la contraseña"
//     if (!validationContrasena) errors.contrasena = "Los tickets deben ser un numero positivo"
//     return errors
// }

function Form ({ login }){
    
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
    <div className={style.background}>
        <form className={style.form} onSubmit = { handleSubmit } >
            <div className={style.conteiner}>
                <img className={style.img} src={logo} alt="titulo Rick & Morty" />
                <label 
                    className={style.label} 
                    htmlFor="user"> Nombre de Usuario 
                        <input 
                            className={style.input}
                            type="text" 
                            name="email"
                            value={ userData.email }
                            onChange={ handleChange } 
                            >
                        </input> 
                </label> 
                { errors.email && <p className={style.error}>{errors.email}</p> }
                <label 
                    className={style.label}
                    htmlFor="password"> Contraseña 
                        <input 
                            className={style.input}
                            type="text" 
                            name="password"
                            value={ userData.password }
                            onChange={ handleChange } 
                        >
                        </input>
                </label> 
                { errors.password && <p className={style.error}>{errors.password}</p> }
                <button 
                    className={style.button} > Submit 
                </button>
            </div>
        </form>
    </div>
    )
}

export default Form;