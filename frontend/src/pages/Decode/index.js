import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import api from '../../services/api';
import Alert from 'react-bootstrap/Alert';
import Header from '../../components/Header';
import { getToken } from '../../utils/auth'
import './style.css';

function Decode() {

  const token = getToken();

  const options = {
    headers: {
      "authorization": `Bearer ${token}`
    }
  }

  const [erros, setErros] = useState([
    {
      msg: '',
    },
  ]);

  const [logDesofuscado, setLogDesofuscado] = useState({
    logDecode: '',
  });

  const [logOfuscado, setLogOfuscado] = useState({
    log: '',
  });


  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogOfuscado({ ...logOfuscado, [name]: value });
  }


  async function handleSubmit(event) {
    event.preventDefault();

    const { log } = logOfuscado;

    const data = {
      log,
    };

    await api.post('/string', data, options).then((response) => {
      setLogDesofuscado(response.data);
      setErros(response.data.erros);
    });
  }

  return (
    <>
      <Header />
      <div id="page-decode">
        {erros.map((erro, id) =>
          erro.msg === '' ? (
            ''
          ) : (
            <Alert key={id} variant="danger">
              {erro.msg}
            </Alert>
          )
        )}

        <div id="logAnexo">
          <Form
            encType="multipart/form-data"
            action="http://localhost:3001/app/upload"
            method="POST"
          >
            <label htmlFor="anexo">Anexo de Arquivo</label>
              <Form.File type="file"  name="attachment" />
            <button type="submit">Enviar Anexo</button>
          </Form>
        </div>

        <div id="logString">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="log">Informe o log</label>
              <input
                type="text"
                name="log"
                id="log"
                onChange={handleInputChange}
              />
            </div>
            {logDesofuscado.logDecode === '' ? (
              ''
            ) : (
              <Alert variant="success">
                Log Desofuscado: {logDesofuscado.logDecode}
              </Alert>
            )}
            <button type="submit">Enviar Log</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Decode;
