import React from 'react'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import { connect } from 'react-redux'
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'


const Header = props => {

  const { user, isGreen } = props

  // A un array le saco .length pero a un obejto nose
  // afortunamente con Object.keys(aqui el objeto).length 
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    // Le envio un objeto vacio
    // Osea borra el estado de user
    props.logoutRequest({});
  }  


  

  return (
    <header className={isGreen? 'header-green':'header'}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
              <img src={userIcon} alt='User icon' />
            )}
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ? <li><a href="#nada">|{user.name}</a></li> : null}

          {hasUser ?
            <li><a href="#LOGOUT" onClick={handleLogOut}>Cerrar Sesión</a></li>
            :
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }

          <li><a href="#footer">IR A FOOTER</a></li>
        </ul>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

// Aqui solo le pasa el payload, entonces no 1
// seria una funcion, solo un objeto
const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
