import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* navbar goes here */}
        <Navbar/>
        <header className="App-header">
          <h1><marquee behavior="" direction="">Welcome to Vinywaji Proper</marquee></h1>
        </header>

        <nav className='text-center'>
          <Link to="/signup" className='btn btn-danger btn-sm m-2'>Signup</Link>
          <Link to="/signin" className='btn btn-danger btn-sm m-2'>Signin</Link>
          <Link to="/addproduct" className='btn btn-danger btn-sm m-2'>Addproduct</Link>
          <Link to="/" className='btn btn-danger btn-sm m-2'>Getproduct</Link>

        </nav>

        {/* Routes go here */}
        <Routes>
          <Route path='/' element={<Getproduct />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproducts />} />
          <Route path='/makepayment' element={<Mpesapayment />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
