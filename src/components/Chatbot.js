import React, { useEffect, useState } from 'react';
import swal from 'sweetalert2';
import AWS from 'aws-sdk';
import axios from 'axios';
import '../styles/style_partidas.css';
import '../styles/style_preloader.css';
import '../styles/style_chatbot.css';
import '../styles/style_switch.css';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/Nabvar';

const Chatbot = () => {
  const { currentUser } = useAuth();
  const [partidas, setPartida] = useState([]);
  const [result, setResult] = useState([]);
  const [input, setInput] = useState([]);
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/files`,
          headers: {
            Authorization: `Bearer ${currentUser?.access_token}`,
          },
        };
        const response = await axios(config);
        const resPartida = response.data.matches;
        setPartida(resPartida);
        setLoading(false);
      } catch (error) {}
    };
    fetchData();
  }, [currentUser]);

  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder acceder al chatbot',
      icon: 'warning',
    });
    return <Navigate to="/login" />;
  }

  const onSubmitText = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setInput('');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const onSubmitFile = async (event) => {
    event.preventDefault();

    try {
      // Configure AWS to use promise
      AWS.config.setPromisesDependency(require('bluebird'));
      AWS.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        region: 'sa-east-1', // or your preferred region
      });
      console.log(process.env.REACT_APP_BUCKET_NAME);
      const s3 = new AWS.S3();
      const file = selectedFile;
      const fileName = file.name;

      var params = {
        ACL: 'public-read',
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Body: file,
        Key: fileName,
      };

      let data = await s3.upload(params).promise();

      if (data) {
        console.log(`File uploaded successfully at ${data.Location}`);
        const response = axios.post(`${process.env.REACT_APP_API_URL}/files`, {
          headers: {
            Authorization: `Bearer ${currentUser?.access_token}`,
            fileLocation: data.Location,
          },
        });

        if (response.status !== 200) {
          throw (
            response.data.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleOnChange = (event) => {
    setIsChecked(event.target.id === 'switchYearly');
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <Navbar />
          <div className="partidas-container-1">
            <div className="text_admin">
              <div className="container">
                <h3 className="titulo_admin">Chatbot</h3>
                <form onSubmit={onSubmitFile}>
                  <input
                    name="file"
                    className="file-input"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <button className="boton_chat" type="submit">
                    Enviar Archivo
                  </button>
                </form>
              </div>
              <form className="login" onSubmit={onSubmitText}>
                <div className="cantidad-tropas">
                  <input
                    type="text"
                    name="animal"
                    placeholder="Ingresar tu pregunta"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="cantidad-tropas">
                  <select value={selected} onChange={handleChange}>
                    <option value="">Selecciona un archivo</option>
                    {partidas.map((partida, index) => (
                      <option key={index} value={partida.id}>
                        {partida.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="container">
                  <div className="switches-container">
                    <input
                      type="radio"
                      id="switchMonthly"
                      name="switchPlan"
                      value="Monthly"
                      defaultChecked
                      onChange={handleOnChange}
                    />
                    <input
                      type="radio"
                      id="switchYearly"
                      name="switchPlan"
                      value="Yearly"
                      onChange={handleOnChange}
                    />
                    <label htmlFor="switchMonthly">Solo Texto</label>
                    <label htmlFor="switchYearly">Texto y Audio</label>
                    <div className="switch-wrapper">
                      <div className="switch">
                        <div>Solo Texto</div>
                        <div>Texto y Audio</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cantidad-tropas">
                  <button className="boton_chat" type="submit">
                    Enviar Pregunta
                  </button>
                </div>
              </form>
              <div className="Chatbot">{result}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
