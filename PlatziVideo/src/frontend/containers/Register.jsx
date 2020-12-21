import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

import { connect } from 'react-redux'

import { registerRequest } from '../actions'
import Header from '../components/Header'

const Register = props => {

  const [form, setValues] = useState({})

	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
  }
  
  const handleSubmit = e => {
		e.preventDefault();
		console.log(form);
		props.registerRequest(form);
    // TODO AQUI SE PUEDEN HACER VALIDACIONES 
		props.history.push('/'); //redirect to home
  };
  
  return (

    <>
    <Header isGreen/>
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input className="input"
                 name="nombre" 
                 type="text"
                 onChange={handleInput}
                 placeholder="Nombre" />

          <input className="input"
                 type="text"
                 name="email"
                 onChange={handleInput}
                 placeholder="Correo" />

          <input className="input"
                 type="password"
                 name="password"
                 onChange={handleInput}
                 placeholder="Contraseña" />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
    </>
  )
}

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps)(Register)