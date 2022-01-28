import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Edit from './components/Edit';


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<ProductList />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/add" element={<Add />}>
        </Route>
        <Route path="/edit/:id" element={<Edit />}>
        </Route>

        </Routes>
    </BrowserRouter>

  );
}

export default App;
