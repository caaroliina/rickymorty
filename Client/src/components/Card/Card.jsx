import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/action"

function Card({ id, name, status, species, gender, origin, image, onCLose, addFav, removeFav, myFavorites, onClose}) {

   const [isFav, setIsFav] = useState(false);

   const location = useLocation()

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id)
      } else {
         setIsFav(true),
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         { fav.id === id && setIsFav(true); }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.conteiner}>

         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         
         <div className={style.button}><button className={style.onCLose}  onClick={ () => onCLose(id) }> X </button></div>

         <img src={ image } alt='' />

         {
            !pathname.includes('/favorites') &&
            <button className={style.btn} onClick={()=> onClose(id)}> X </button>
         }

         <Link to={`/detail/${id}`} >
            <h3 className={style.nombres}>{ name }</h3>
         </Link>

         <h2> { species }</h2>
         <h2> { status } </h2>
         <h2> { gender } </h2>
         <h2> { origin } </h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character)=> { dispatch(addFav(character)) },
      removeFav: (id)=> { dispatch(removeFav(id)) }
   }
}

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites,
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Card);