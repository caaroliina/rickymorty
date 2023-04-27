import style from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {

   const [id, setId] = useState("");  

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className = {style.search}>

         <input type ='search' onChange ={ handleChange } value={ id } />

         <button className ={style.button} onClick ={ () => onSearch(id) }> Agregar </button>

      </div>
   );
}

export default SearchBar;