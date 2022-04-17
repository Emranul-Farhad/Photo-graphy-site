import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Herro from './components/HerroPart/Herro';
import { Route, Routes } from 'react-router-dom';
import Photo from './Photoshow/Photo';
import MyService from './components/Myservces/MyService';
import Login from './Login/Login';






function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Herro></Herro>} ></Route>
      <Route path='/photos' element={<Photo></Photo>} ></Route>
      <Route path='/services' element={<MyService></MyService>} ></Route>
      <Route path='/login-signup' element={<Login></Login>} ></Route>
      {/* <Route path='/login-signup' element={<Login></Login>} ></Route> */}
    </Routes>
    </div>
  );
}

export default App;
