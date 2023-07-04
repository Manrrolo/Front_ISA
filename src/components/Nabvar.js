import '../styles/style_navbar.css';
import Anchor from './Anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../JQuery/navbar'
import Music from './Music';
import useAuth from '../hooks/useAuth';
function Navbar() {
  const { currentUser, nickName, isAdmin , handleUserLogout } = useAuth();
  return (
    <>
      <Music />
      <nav className="nav">
        <ul className="menu">
          <li id="li" className="logo">
            <Anchor title={'Werlin'} link={'/'} class={'anchor'}></Anchor>
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
              title={'Como Jugar'}
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
                title={'Jugar'}
                link={'/partidas'}
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
