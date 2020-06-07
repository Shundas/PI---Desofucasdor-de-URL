import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Cadastro from './pages/Cadastro'

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Cadastro} path='/'/>
        </BrowserRouter>
    )
}

export default Routes;