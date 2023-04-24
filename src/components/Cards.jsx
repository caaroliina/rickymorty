import Card from './Card';
import "../css/Cards.css"

function Cards({ characters, onClose }) {
   return (
      <div className='conteriner-cards'>
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
