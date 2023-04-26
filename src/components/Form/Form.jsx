import "./Form.css"
import { useState } from "react";
// import validation from "./validation";

function Form (){

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    // const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        }
        );
    };

    return (
        <form>
            <label htmlFor="user"> Nombre de Usuario: 
                <input 
                    type="text" 
                    name="email"
                    value={ userData.email }
                    onChange={ handleChange } >
                </input> 
            </label> 
            <label 
                htmlFor="password"> Contraseña 
                    <input 
                        type="password" 
                        name="password"
                        value={ userData.password }
                        onChange={ handleChange } >
                    </input>
            </label> 
            <button> Submit </button>
        </form>
    )
}

export default Form;