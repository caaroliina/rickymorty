import Card from '../Card/Card';
import style from "./Cards.module.css"

function Cards({ characters, onClose }) {
   return (
      <div className={style.conteriner}>
         {characters.map( ({ id, name, status, gender, origin, image }) => {
            return (
               <Card 
                  key = { id }
                  id = { id }
                  name = { name }
                  status ={ status }
                  gender = { gender }
                  origin = { origin.name }
                  image = { image }
                  onCLose = { onClose }
                  // key = {key}
               />);
         })}
      </div>
   );
}

export default Cards;
