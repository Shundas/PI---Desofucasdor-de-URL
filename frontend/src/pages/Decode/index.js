import React from 'react';
import api from '../../services/api';
import Form from 'react-bootstrap/Form';

function Decode() {
    const teste = api.post("/upload")

    return (
        <div>
            <Form action={teste} method="POST" encType="multipart/form-data">
               <Form.Group>
                   <Form.File id="attachment" name="attachment" label="Anexo" />
               </Form.Group> 
               <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}

export default Decode;