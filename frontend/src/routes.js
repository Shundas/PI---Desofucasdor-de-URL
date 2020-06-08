import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'
import Editar from './pages/Editar'

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Cadastro} exact path='/'/>
            <Route component={Lista} path='/lista'/>
            <Route component={Editar} path='/editar/:id'/>
        </BrowserRouter>
    )
}

export default Routes;