import SearchBar from "./SearchBar";
import "../css/Nav.css"

function Nav ({ onSearch }){
    return (
    <div className="conteiner-nav">
        <SearchBar onSearch = { onSearch } />
    </div> )
}

export default Nav;