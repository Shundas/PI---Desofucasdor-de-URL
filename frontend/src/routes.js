import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import Editar from "./pages/Editar";
import Home from "./pages/Home/index";
import Decode from "./pages/Decode/index"
import { isAuth } from "./utils/auth";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={Cadastro} path="/cadastro" />
      <Route path="/lista" render={() =>
        isAuth() ? (
          <Lista />
        ) : (
          <Redirect to="/" />
        )
      }/>
      <Route path="/editar/:id" render={() =>
        isAuth() ? (
          <Editar />
        ) : (
          <Redirect to="/" />
        )
      }/>
      <Route path="/desofuscador" render={() =>
        isAuth() ? (
          <Decode />
        ) : (
          <Redirect to="/" />
        )
      }/>
    </BrowserRouter>
  );
}

export default Routes;
