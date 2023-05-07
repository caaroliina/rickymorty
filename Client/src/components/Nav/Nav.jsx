import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav ({ onSearch, setAccess }){

    const handleLogOut = ()=>{
        setAccess(false);
    }

    return (
        <nav className={style.conteiner}>

            <img className={style.titulo} src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="Home rick and Morty" />
            
            <NavLink to="/about">
                <button className={style.button}> About </button>
            </NavLink>
            <NavLink to="/characters">
                <button className={style.button}> Personajes </button>    
            </NavLink>
            <NavLink to="/favorites"> Favoritos </NavLink>    
            <button onClick={handleLogOut}> LOG OUT </button>

            <SearchBar onSearch={onSearch}/>

        </nav> 
        )
}

export default Nav;