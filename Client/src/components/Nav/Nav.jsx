import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

function Nav ({ onSearch }){
    return (
    <div className={style.conteiner}>
        <NavLink to={"/"}>
            <img className={style.titulo} src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="Home rick and Morty" />
        </NavLink>
        <NavLink to="/about">
            <button className={style.button}> About </button>
        </NavLink>
        <NavLink to="/Characters">
            <button className={style.button}> Personajes </button>    
        </NavLink>

        <SearchBar onSearch = { onSearch } />

    </div> )
}

export default Nav;