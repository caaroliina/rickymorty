import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from "axios";

function App() {

   const [ characters, setCharacters ] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) =>{
      const characterFilter = characters.filter(character => 
         character.id !== Number(id))
      setCharacters(characterFilter);
   };
   
   return (
      <div className='App'>
         <body className='contenedor-principal'>
            <Nav onSearch = { onSearch } />
            <Cards characters={ characters } onClose={ onClose } />
         </body>
      </div>
   );
}

export default App;
