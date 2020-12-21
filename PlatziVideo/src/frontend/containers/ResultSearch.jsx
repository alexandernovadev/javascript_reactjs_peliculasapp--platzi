import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Carouselitem from '../components/Carouselitem'

import '../assets/styles/components/SearchView.scss'
import { connect } from 'react-redux';

import { searchVideo } from '../actions';

const ResultSearch = props => {

	// Traer el termino de busqueda
	const { string } = props.match.params

	// const [form, setValues] = useState({})

	useEffect(() => {
		// Esta funcion es del reducer 
		props.searchVideo(string)
	}, [])

	console.log(props.busqueda);

	return (
		<>
			<Header />
			<section className="Home">
				<div className="text-search">
					<h1>Resultados para : {string}</h1>
					<hr/>
				</div>
				{props.busqueda.length == 0 ?
						<div className="text-search">
							<h1>Upp ! No hay resultados para tu busqueda</h1>
						</div>
					:
					<Carousel>
						{props.busqueda.map((item) => (
							<Carouselitem key={item.id} {...item} />
						))}
					</Carousel>
				}
			</section>
		</>
	)
}

// El Reducer
const mapStateToProps = (state) => {
	return {
		busqueda: state.busqueda,
	}
}

// LA ACTION
const mapDispatchToProps = {
	searchVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch)