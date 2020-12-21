import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loginRequest } from '../actions';

const Login = props => {

	const [form, setValues] = useState({

	})

	const handleInput = (event) => {

		// Coje el name del input y se lo AbortSignal
		// si se llama email pues el target queda email
		// si se llama pass pues que pass

		// Magicamente capura el valor de los inputs y los
		// trae al form ?? WUUAAA OMG WHF ?
		// Severo
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log(form);
		// Aui le envio el' payload '  a la action
		props.loginRequest(form);

		props.history.push('/'); //redirect to home
	};

	return (
		<>
		<Header isGreen/>
		<section className="login">
			<section className="login__container">
				<h2>Inicia sesión</h2>
				<form className="login__container--form" onSubmit={handleSubmit}>
					<input className="input"
						type="text"
						placeholder="Correo"
						name="email"
						onChange={handleInput} />
					<input className="input"
						type="password"
						placeholder="Contraseña"
						name="password"
						onChange={handleInput} />
					<button className="button">Iniciar sesión</button>
					<div className="login__container--remember-me">
						<label>
							<input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
						<a href="/">Olvidé mi contraseña</a>
					</div>
				</form>
				<section className="login__container--social-media">
					<div><img src={googleIcon} /> Inicia sesión con Google</div>
					<div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
				</section>
				<p className="login__container--register">No tienes ninguna cuenta
			<Link to="/register"> Regístrate</Link></p>
			</section>
		</section>
		</>
	)
}

// Login.prototype = {

// 	cover: PropTypes.string,
// 	title: PropTypes.string,
// 	year: PropTypes.number,
// 	contentRating: PropTypes.number,
// 	duration: PropTypes.number

// }


const mapDispatchToProps = {
	loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)