import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar';

import ProfilePage from './components/ProfilePage';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 function App() {
 

  // useEffect(() => {
  //   dispatch(getOrModifyPost());
  //   dispatch(getOrModifyPost('POST', CREATE_NEW_POST, {text: 'NUOVO POST APPENA CREATO'}))
  //   dispatch(getOrModifyPost('PUT', MODIFY_POST, {text: "POST MODIFICATO"}, "66df0ef9af434b00159d831f" ))
  //   dispatch(getOrModifyPost('DELETE', MODIFY_POST, '', "66df11f5af434b00159d831f" ))
  // }, []);

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



