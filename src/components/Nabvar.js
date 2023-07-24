import '../styles/style_navbar.css';
import Anchor from './Anchor';
import logoIsa from '../imgs/navbar-isa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../JQuery/navbar';
import Music from './Music';
import useAuth from '../hooks/useAuth';
function Navbar() {
  const { currentUser, nickName, isAdmin, handleUserLogout } = useAuth();
  return (
    <>
      <Music />
      <nav className="nav">
        <ul className="menu">
          <li id="li" className="logo">
            <img src={logoIsa} alt="Logo" />
          </li>
          <li id="li" className="item">
            <Anchor title={'Home'} link={'/'} class={'anchor'}></Anchor>
          </li>
          <li id="li" className="item">
            <Anchor
              title={'Nosotros'}
              link={'/nosotros'}
              class={'anchor'}
            ></Anchor>
          </li>
          <li id="li" className="item">
            <Anchor
              title={'Nuestras rutas'}
              link={'/reglas'}
              class={'anchor'}
            ></Anchor>
          </li>
          <li id="li" className="item">
            <Anchor title={'Acerca'} link={'/about'} class={'anchor'}></Anchor>
          </li>
          <li id="li" className="item button">
            {currentUser ? (
              <Anchor
                title={'Chatbot'}
                link={'/chatbot'}
                class={'anchor'}
              ></Anchor>
            ) : (
              <Anchor
                title={'Iniciar Sesión'}
                link={'/login'}
                class={'anchor'}
              ></Anchor>
            )}
          </li>
          <li id="li" className="item button secondary drop">
            {currentUser ? (
              <div className="dropdown">
                <button className="dropbtn">{nickName}</button>
                <div className="dropdown-content">
                  <Anchor
                    title={'Perfil'}
                    link={'/perfil'}
                    class={'anchor'}
                  ></Anchor>
                  <Anchor
                    title={'Cerrar Sesión'}
                    link={'/'}
                    class={'anchor'}
                    click={handleUserLogout}
                  ></Anchor>
                  {isAdmin ? (
                    <Anchor
                      title={'Admin Panel'}
                      link={'/admin'}
                      class={'anchor'}
                    ></Anchor>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ) : (
              <Anchor
                title={'Registro'}
                link={'/registro'}
                class={'anchor'}
              ></Anchor>
            )}
          </li>
          <li id="li" className="toggle">
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
