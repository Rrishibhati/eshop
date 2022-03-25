import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Landing from './Landing';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Landing />}>
           <Route path="/" element={<Home />}></Route>
           <Route path="/checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
