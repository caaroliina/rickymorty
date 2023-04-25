// import "./Card.css"
import { Link } from "react-router-dom";

function Card({ id, name, status, species, gender, origin, image, onCLose }) {
   return (
      <div className="conteiner-card">
         <button  onClick={ () => onCLose(id) }> X </button>
         <Link to={`/detail/${id}`} >
            <h3>{ name }</h3>
         </Link>
         <h2> { species }</h2>
         <h2> { status }</h2>
         <h2> { gender }</h2>
         <h2> { origin }</h2>
         <img src={ image } alt='' />
      </div>
   );
}

export default Card;