import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  /** las props siempre las traigo del mapStateToProps */
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;/**si tiene propiedades hay user */
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>
              {user.name}
            </a>
          </li>
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}> Cerrar Sesion </a></li> : (
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            )}

        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
