import Navbar from './Nabvar';
import '../styles/style_index.css';
import '../styles/style_preloader.css';
import logo from '../imgs/logo 2.png';
import castillo from '../imgs/castillo.jpg';
import Button from './Button';
import { useState, useEffect } from 'react';
function Landing() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  if (loading) {
    <div className="loading">Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <section>
        <img src={logo} id="moon" alt="" />
        <img src={castillo} id="mountains_behind" alt="" />
        <Button id={'btn'} id_2={'btn-btn'} title={'¡Juega ya!'} link={'/partidas'}></Button>
      </section>
    </>
  );
}

export default Landing;
