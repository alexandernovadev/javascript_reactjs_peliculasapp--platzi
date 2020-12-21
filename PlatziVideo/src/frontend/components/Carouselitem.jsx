import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// Simmpre tengo q conectar el componente con redux
import { connect } from 'react-redux'

// Traer la accion setFavoriite
import { setFavorite, deleteFavorite } from '../actions'

import '../assets/styles/components/Carouselitem.scss'
import iconPlay from '../assets/static/play-icon.png'
import iconPlus from '../assets/static/plus-icon.png'
import iconDelete from '../assets/static/remove-icon.png'

// const Carouselitem = ({ cover, title, year, contentRating, duration }) => (


const Carouselitem = (props) => {

  const { id, cover, title, year, contentRating, duration, isList } = props
  // console.log("ID. ", id);
  // console.log('-> ',isList);


  // crear una funcion que haga el guardado de facoritos
  const handlesetFavorite = () => {
    // console.log("QUE PASO");

    // Aqui le envio todo los datos de cada item en un objeto
    props.setFavorite({ id, cover, title, year, contentRating, duration })
  }
  const handledeleteFavorite = (itemId) => {
    // Aquie le envio todo los datos de cada item en un objeto
    console.log("IDDELETE ", itemId);

    props.deleteFavorite(itemId)
  }

  return (

    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img className="carousel-item__details--img"
              src={iconPlay}
              alt="Play Icon" />
          </Link>

          {isList ?

            <img className="carousel-item__details--img"
              src={iconDelete}
              onClick={() => handledeleteFavorite(id)}
              alt="Delete Icon" />
            :
            <img className="carousel-item__details--img"
              src={iconPlus}
              onClick={handlesetFavorite}
              alt="Plus Icon" />
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {/* {`${year} ${contentRating} ${duration} minutos | ${isList}`} */}
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  )
}

// Vamos a darle formato a cada propiedad

Carouselitem.prototype = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.number,
  duration: PropTypes.number

}

// export default Carouselitem 

// Setfavorite seria el action que se creo
// asi que hay que importarlo
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(Carouselitem)