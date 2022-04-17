import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Herro from './components/HerroPart/Herro';
import { Route, Routes } from 'react-router-dom';
import Photo from './Photoshow/Photo';





function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Herro></Herro>} ></Route>
      <Route path='/photos' element={<Photo></Photo>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
