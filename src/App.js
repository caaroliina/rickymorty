import './App.css';
import Cards from './components/Cards/Cards';
import About from "./components/About/About"
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import axios from "axios";
import { useState} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {

   const location = useLocation();
   // const navigate = useNavigate();

   const [ characters, setCharacters ] = useState([]);
   // const [access, setAccess] = useState(false);

   // const EMAIL = "caaroliina@gmail.com";
   // const PASSWORD = "caar0liina";

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

   // function login(userData){
   //    if (EMAIL === userData.email && PASSWORD === userData.password){
   //       setAccess( setAccess(true) );
   //       navigate.path("/characters");
   //    }
   // }
   
   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);
      
   

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch = { onSearch } />
         }
         <Routes>
            <Route path='/' element= {<Form 
            // onLogin ={ login } 
            />}/>
            <Route path='/about' element = { <About /> } />
            <Route path='/characters' element = { <Cards characters={ characters } onClose={ onClose } /> }/>
            <Route path={ '/detail/:id' } element = { < Detail/> } />
         </Routes>
            
      </div>
   );
}

export default App;
