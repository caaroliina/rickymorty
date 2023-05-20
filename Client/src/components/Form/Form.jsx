import style from "./Form.module.css"
import logo from "../../images/wannaDie.png"
import { useState } from "react";
import validation from "./validation";

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
        console.log("click");
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
                <div className="error">
                    { errors.email && <p className={style.error}>{errors.email}</p> }
                </div>
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
                <div className="error">
                    { errors.password && <p className={style.error}>{errors.password}</p> }
                </div>
                <button type="submit" className={style.button} > Submit 
                </button>
            </div>
        </form>
    </div>
    )
}

export default Form;