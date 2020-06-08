import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Cadastro} exact path='/'/>
            <Route component={Lista} exact path='/lista'/>
        </BrowserRouter>
    )
}

export default Routes;