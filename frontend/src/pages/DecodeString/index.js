import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import api from '../../services/api'


function DecodeString() {
    // const [logDesofuscado, setLogDesofuscado] = useState({
    //     log: ""
    // })

    const [log, setLog] = useState({
        log: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLog({ ...log, [name]: value });
    }

    async function handleSubmit() {
        const {log} = log;

        api.post('/string', log)
        // .then((response) => {
        //     setLogDesofuscado(response.data)
        //     // setErros(response.data.erros)
        // })
    }



    return (
        <div id="page-decode-log">
            <Form action={handleSubmit}>
                <div className="field">
                    <label htmlFor="log">Informe o log</label>
                    <input
                        type="text"
                        name="log"
                        id="log"
                        onChange={handleInputChange}
                    />
                </div>
               <button type="submit">Enviar</button>
            </Form>
            <div>
                <label htmlFor="logRecebido">Log Desofuscado:</label>
                {/* <input
                    type="text"
                    name="log"
                    id="log"
                    disabled="disabled"
                    value={logDesofuscado.log}
                    onChange={handleSubmit}
                /> */}
            </div>
        </div>
    )
}

export default DecodeString;