import 'bootstrap/dist/css/bootstrap.min.css'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import CustomNavbar from './components/CustomNavbar';

import ProfilePage from './components/ProfilePage';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import DinamicProfile from './components/DinamicProfile';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <header className='d-flex bg-dark align-items-center justify-content-center'>
          <CustomNavbar />
        </header>
        <main className='d-flex justify-content-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/myprofile' element={<ProfilePage />} />
            <Route path='/profile/:id' element={<DinamicProfile />} />
            <Route path='search/:query' element={<Search />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;



