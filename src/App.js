import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Components/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Registration from './Pages/Authentication/Login/Registration';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='pb-0 max-w-7xl mx-auto'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
       
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>}>
        </Route>
        
      </Routes>

      <Footer />

      <ToastContainer />

    </div>
  );
}

export default App;
