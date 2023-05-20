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


   async function onSearch(id) {
      try {
          const url = 'http://localhost:3001/rickandmorty/character/' + id
      
          const { data } = await axios(url)
          const char = characters?.find(e => e.id === Number(data.id))
    
          if (char) {
            alert("Already in the list") 
          } 
          else if(data.id !== undefined) {
            setCharacters(characters => [...characters, data]);
          }
      
          else {
            alert('Character not found');
          }
    
      } 
      
       catch (error) {
        return { error: error.message};
      } 
   }

   const onClose = (id) =>{
      const characterFilter = characters.filter(character => character.id !== Number(id))
         setCharacters(characterFilter);
   };

   async function login(userData) {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const QUERY=  `?email=${email}&password=${password}`
        const { data } = await axios(URL + QUERY)
          const { access } = data;
          setAccess(data);
          access && navigate('/home');
      
      } 
      catch (error) {
          return { error: error.message};
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
