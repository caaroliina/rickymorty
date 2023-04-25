import SearchBar from "../SearchBar/SearchBar";
// import "./Nav.css"
import { NavLink } from "react-router-dom";
// import About from "./About"

function Nav ({ onSearch }){
    return (
    <div className="conteiner-nav">
        
        <NavLink to="/about">
            <button> About </button>
        </NavLink>
        <NavLink to="/Characters">
            <button> Personajes </button>    
        </NavLink>

        <SearchBar onSearch = { onSearch } />

    </div> )
}

export default Nav;