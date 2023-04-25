import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css"
import { NavLink } from "react-router-dom";

function Nav ({ onSearch }){
    return (
    <div className="conteiner-nav">
        {/* <img src="./" alt="" /> */}
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