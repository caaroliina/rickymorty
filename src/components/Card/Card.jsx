import "./Card.css"
import { Link } from "react-router-dom";

function Card({ id, name, status, species, gender, origin, image, onCLose }) {
   return (
      <div className="conteiner-card">
         <div className="button-close">
            <button className="onCLose"  onClick={ () => onCLose(id) }> X </button>
         </div>
         <img src={ image } alt='' />
         <Link to={`/detail/${id}`} >
            <h3 className="nombres">{ name }</h3>
         </Link>
         {/* <h2> { species }</h2> */}
         <h2> { status }</h2>
         <h2> { gender }</h2>
         <h2> { origin }</h2>
      </div>
   );
}

export default Card;