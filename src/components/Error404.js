import '../styles/style_error404.css';
import Anchor from './Anchor';
function Error404() {
  return (
    <>
      <header className="top-header"></header>
      <div className="body_error">
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>
        <section className="error">
          <div className="error__content">
            <div className="error__message message">
              <h1 className="message__title">Página No Disponible</h1>
              <p className="message__text">
                Lo sentimos, la página que buscabas no existe.
              </p>
            </div>
            <div className="error__nav e-nav">
              <Anchor link={'/'} class={'e-nav__link'}></Anchor>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Error404;
