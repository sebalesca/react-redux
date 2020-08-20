import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    {/* este switch hace que muestre solo 1 componente */}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route component={NotFound} />
      {/* esto maneja las rutas desconocidas  */}
    </Switch>
  </BrowserRouter>
);
export default App;
