import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import api from '../../services/api'


function DecodeString() {
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
        </div>
    )
}

export default DecodeString;