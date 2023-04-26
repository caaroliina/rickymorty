import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css"
import { NavLink } from "react-router-dom";

function Nav ({ onSearch }){
    return (
    <div className="conteiner-nav">
        <NavLink to={"/"}>
            <img className="titulo-home" src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="Home rick and Morty" />
        </NavLink>
        <NavLink to="/about">
            <button className="button-nav"> About </button>
        </NavLink>
        <NavLink to="/Characters">
            <button className="button-nav"> Personajes </button>    
        </NavLink>

        <SearchBar onSearch = { onSearch } />

    </div> )
}

export default Nav;