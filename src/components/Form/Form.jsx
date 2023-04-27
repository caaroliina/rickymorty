import style from "./Form.module.css"
import logo from "../../images/wannaDie.png"
// import { useState } from "react";
// import validation from "./validation";

function Form ({ login }){
    
    // const [errors, setErrors] = useState({});

    // const [userData, setUserData] = useState({
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (event) => {
    //     setUserData({
    //         ...userData,
    //         [event.target.name]: event.target.value
    //     }
    //     );
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     login(userData);
    // }

    return (
        <form className={style.form}>
            <div className={style.conteiner}>
                <img className={style.img} src={logo} alt="titulo Rick & Morty" />
                <label 
                    className={style.label} 
                    htmlFor="user"> Nombre de Usuario 
                        <input 
                            className={style.input}
                            type="text" 
                            name="email"
                            // value={ userData.email }
                            // onChange={ handleChange } 
                            >
                        </input> 
                </label> 
                <label 
                    className={style.label}
                    htmlFor="password"> Contraseña 
                        <input 
                            className={style.input}
                            type="password" 
                            name="password"
                            // value={ userData.password }
                            // onChange={ handleChange } 
                        >
                        </input>
                </label> 
                <button 
                    className={style.button} 
                    // handleSubmit = { handleSubmit } 
                    > Submit </button>
            </div>
        </form>
    )
}

export default Form;