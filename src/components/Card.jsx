import "../css/Card.css"

function Card({ id, name, status, species, gender, origin, image, onCLose }) {
   return (
      <div className="conteiner-card">
         <button className="button" onClick={ () => onCLose(id) }> X </button>
         <h2> { name }</h2>
         <h2> { species }</h2>
         <h2> { status }</h2>
         <h2> { gender }</h2>
         <h2> { origin }</h2>
         <img src={image} alt='' />
      </div>
   );
}

export default Card;