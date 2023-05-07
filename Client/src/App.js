import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './components/Cards/Cards';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';

const EMAIL = "caaroliina@gmail.com";
const PASSWORD = "caar0liina";

function App() {

   const location = useLocation();
   const navigate = useNavigate();

   const [ characters, setCharacters ] = useState([]);
   const [access, setAccess] = useState(false);


   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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

   function login(userData){
      if (userData.email === EMAIL &&  userData.password === PASSWORD){
         setAccess(true);
         navigate("/characters");
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);
   

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch = { onSearch } setAccess= {setAccess}/>
         }
         <Routes>
            <Route path='/' element= {<Form login ={ login } />}/>
            <Route path='/about' element = { <About /> } />
            <Route path='/characters' element = { <Cards characters={ characters } onClose={ onClose } /> }/>
            <Route path='/detail/:id'  element = { < Detail/> } />
            <Route path='/favorites' element= { <Favorites/> } />
         </Routes>
            
      </div>
   );
}

export default App;
