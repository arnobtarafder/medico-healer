import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Pages/Authentication/Login/Registration';

function App() {
  return (
    <div className='pb-0 max-w-7xl mx-auto'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
