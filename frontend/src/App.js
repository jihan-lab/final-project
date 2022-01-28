import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';


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
        </Routes>
    </BrowserRouter>
  );
}

export default App;
