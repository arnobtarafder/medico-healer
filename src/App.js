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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Components/MyAppointments/MyAppointments';
import MyReviews from './Components/MyReviews/MyReviews';
import Users from './Components/Users/Users';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import AddDoctor from './Components/AddDoctor/AddDoctor';




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
        
         <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route index element={<MyAppointments />}></Route>
            <Route path="reviews" element={<MyReviews />}></Route>
            <Route path="reviews" element={<MyReviews />}></Route>
            <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
            <Route path="addDoctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
        </Route>
        
      </Routes>

      <Footer />

      <ToastContainer />

    </div>
  );
}

export default App;
