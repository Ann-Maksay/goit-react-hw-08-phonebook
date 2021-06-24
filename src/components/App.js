import "./App.scss";

import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "./AppBar/AppBar";
import routes from "../routes";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage" /* webpackChunkName: "contscts-page" */)
);
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("../pages/LoginPage" /* webpackChunkName: "login-page" */)
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.contacts} component={ContactsPage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.login} component={LoginPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
