import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSearch }) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className = "search-bar">

         <input type = 'search' onChange = { handleChange } value={ id } />

         <button className="button-add" onClick = { () => onSearch(id) }> Agregar </button>

      </div>
   );
}

export default SearchBar;