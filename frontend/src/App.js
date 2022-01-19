import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
