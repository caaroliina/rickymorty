function validation(userData){
    let errors = {};
    
    if(!userData.email) errors.email = "Ingrese Email";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) errors.email = "Debe ingresar un Email";
    if(userData.email.lenght > 1) errors.email = "El email no debe tener mas de 35 caracteres";

    if(!userData.password) errors.email = "Ingrese contraseña";
    if(!/.*\d+.*/.test(userData.password)) errors.password = "La contraseña debe tener un numero";
    if(userData.password.lenght > 6 || userData.password.lenght < 12) errors.password = "La contraseña debe tener entr 6 y 12 caracteres ";

    return errors 
}

export default validation;