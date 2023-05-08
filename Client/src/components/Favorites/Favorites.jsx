import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { orderCards, filterCards } from "../../redux/action"
import Card from "../Card/Card";

const Favorites = ({myFavorites})=> {

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => dispatch(filterCards(event.target.value))

    return(
        <div>
            <select onChange={handleOrder}>
                <option value="A" >Ascendente</option>
                <option value="D" >Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male" >Hombre</option>
                <option value="Female" >Mujer</option>
                <option value="Genderless">Sin Género</option>
                <option value="unknown" >Desconocido</option>
                <option value="allCharacters"> Mostrar todos </option>
            </select>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card 
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            status={fav.status}
                            origin={fav.origin}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)