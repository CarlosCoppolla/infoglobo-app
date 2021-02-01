import React from 'react';
import Menu from './components/menu';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, } from "@apollo/client"

//import PageRenderer from './page-renderer'

import Home from './pages/home';
import Post from './pages/post';
import Contato from './pages/contato';
import Login from './pages/login';
import EditarPost from './pages/edit-post';
import CriarPost from './pages/create-post';
import DeletarPost from './pages/delete-post';


const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

function App() {
  const usuario = {
    primeiroNome: 'Carlos',
    ultimoNome: 'Coutinho'
  }
  
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Menu usuario={usuario}/>
          <Switch>
            <Route path="/edit-post" component={EditarPost} />
            <Route path="/create-post" component={CriarPost} />
            <Route path="/delete-post" component={DeletarPost} />
            <Route path="/posts" component={Post} />
            <Route path="/contato" component={Contato} />
            <Route path="/login" component={Login} />
            <Route path='/' component={Home} />
            <Route component={() => 404} />
          </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
