import 'bootstrap/dist/css/bootstrap.min.css'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import CustomNavbar from './components/CustomNavbar';

import ProfilePage from './components/ProfilePage';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;



