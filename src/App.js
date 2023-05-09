import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to='/'>Ignitus</Link>
          <Link to='/cart'>
            <button className="btn btn-outline-success">Cart</button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
