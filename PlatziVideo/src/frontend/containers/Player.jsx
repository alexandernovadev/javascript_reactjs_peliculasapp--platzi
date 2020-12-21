import React,{useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

const Player = props => {

	const { id } = props.match.params

	const [ loading, setLoading ] = useState(true);
	// Ojo porque esto de props.playing lo traigo de mapToState
	const hasPlaying = Object.keys(props.playing).length > 0;
	// Mira si un video coincide o NO


	// // Voy a traer el video
	useEffect(() => {
		// Esta funcion es del reducer 
		props.getVideoSource(id)
		setLoading(false)
	}, [])

	console.log("has -",hasPlaying);
	
	return hasPlaying ?(
		<div className='Player'>
			<video controls autoPlay>

				{/* Ese source es un propiedad del json que no dio el profe */}
				<source
					src={props.playing.source}
					type='video/mp4'
				/>
				{/* <source
					src='https://arepa.s3.amazonaws.com/baby-bg.mp4'
					type='video/mp4'
				/> */}
			</video>
			{/* Button de regresar */}
			<div className='Player-back'>
				<Link to='/'>
					<button type='button'>Regresar</button>
				</Link>
			</div>
		</div>
	): loading?
	<h1>Cargando</h1>
	:
	<Redirect to="/404"/>

}

// Traigo el valor del video que se genero con el action
const mapStateToProps = (state) => {
	return {
		playing: state.playing,
	}
}

const mapDispatchToProps = {
	getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)