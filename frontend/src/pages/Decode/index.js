import React from 'react';
import Form from 'react-bootstrap/Form';

function Decode() {
    return (
        <div>
            <Form action="http://localhost:3001/app/upload" method="POST" encType="multipart/form-data">
               <Form.Group>
                   <Form.File id="attachment" name="attachment" label="Anexo" />
               </Form.Group> 
               <button type="submit">Enviar</button>
            </Form>
        </div>
    )
}

export default Decode;