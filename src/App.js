import React from 'react';
import logo from './Brasal.png';
import Home from './Home.js';
import Servico from './Servico.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// <nav>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/servicos">Serviçoes</Link>
//     </li>
//     <li>
//       <Link to="/user">Minha conta</Link>
//     </li>
//   </ul>
// </nav>

export default function App() {
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/servicos">
            <Servico />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}
