import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {

   const location = useLocation();
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
         {
            location.pathname !== '/' && <Nav onSearch = { onSearch } />
         }
         <Routes>
            <Route path='/' element= {<Form />}/>
            <Route path='/about' element = { <About /> } />
            <Route path='/characters' element = { <Cards characters={ characters } onClose={ onClose } /> }/>
            <Route path={ '/detail/:id' } element = { < Detail/> } />
         </Routes>
            
      </div>
   );
}

export default App;
