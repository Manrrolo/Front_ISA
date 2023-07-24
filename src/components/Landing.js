import Navbar from './Nabvar';
import '../styles/style_index.css';
import '../styles/style_preloader.css';
import logo from '../imgs/logo.png';
import castillo from '../imgs/background.jpeg';
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
        <Button
          id={'btn'}
          id_2={'btn-btn'}
          title={'Chatea con Isa-bot 🤖'}
          link={'/chatbot'}
        ></Button>
      </section>
    </>
  );
}

export default Landing;
