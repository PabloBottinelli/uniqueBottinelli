import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route path='/category/:id'>
            <ItemListContainer/>
          </Route>
          <Route path='/detail/:paramId'>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
