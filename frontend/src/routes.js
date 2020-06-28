import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import Editar from "./pages/Editar";
import Home from "./pages/Home/index";
import Decode from "./pages/Decode/index"

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={Cadastro} path="/cadastro" />
      <Route component={Lista} path="/lista" />
      <Route component={Editar} path="/editar/:id" />
      <Route component={Decode} path="/desofuscador" />
    </BrowserRouter>
  );
}

export default Routes;
