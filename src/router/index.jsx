import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Router;
