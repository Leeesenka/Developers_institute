import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
// import Mountain from './components/Mountain';
// import Cities from './components/Cities';
// import Food from './components/Food';
import Gallery from './components/Gallery';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { getPhotos } from './redux/actions';

function App() {
  return (
    <div className="centered-container">
      <Search />

    <Link to='/mountain'>Mountain</Link>
    <Link to='/birds'>Birds</Link>
    <Link to='/food'>Food</Link>
    <Link to='/cities'>Cities</Link>

   
     <Routes>
      {/* <Route path='/birds' element={<Birds term={term} setterm={setterm}/>}/> */}
      <Route path='/:id' element={<Gallery />}/>
      {/* <Route path='/food' element={<Food term={term} setterm={setterm}/>}/> */}
      {/* <Route path='/cities' element={<Cities term={term} setterm={setterm}/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
