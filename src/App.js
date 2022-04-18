import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Herro from './components/HerroPart/Herro';
import { Route, Routes } from 'react-router-dom';
import Photo from './Photoshow/Photo';
import MyService from './components/Myservces/MyService';
import Login from './Login/Login';
import { Toaster } from 'react-hot-toast';
import Chekout from './components/Chekout/Chekout';
import { createContext, useState } from 'react';
import Requiew from './components/Require/Requiew';
import Blog from './components/Blogs/Blog';
import About from './components/Aboutme/About';
import Footer from './components/Footer/Footer';
import Found from './components/Notfound/Found';




export const Servicestate =  createContext()

function App() {
  const [service , setService] = useState([])


  return (
    <div className="App">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Servicestate.Provider value={[service , setService]}> 
      <Routes>
        <Route path='/' element={<Herro></Herro>} ></Route>
        <Route path='/photos' element={<Photo></Photo>} ></Route>
        <Route path='/services' element={<MyService></MyService>} ></Route>
        <Route path='/login-signup' element={<Login></Login>} ></Route>
        <Route path='/Checkout/:ids' element={<Requiew> <Chekout></Chekout> </Requiew> } ></Route>
        <Route path='/blogs' element={<Blog></Blog>} ></Route>
        <Route path='//about-me' element={<About></About>} ></Route>
        <Route path='*' element={<Found></Found>} ></Route>
      </Routes>
       <Footer></Footer>
      </Servicestate.Provider>
    </div>
  );
}

export default App;
