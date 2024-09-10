import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CREATE_NEW_POST, DELETE_POST, MODIFY_POST, getCategory, getCompany, getOrModifyPost, getSearch } from './redux/actions';
import CustomNavbar from './components/CustomNavbar';
import ExpCard from './components/profileComp/ExpCard';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getOrModifyPost());
  //   dispatch(getOrModifyPost('POST', CREATE_NEW_POST, {text: 'NUOVO POST APPENA CREATO'}))
  //   dispatch(getOrModifyPost('PUT', MODIFY_POST, {text: "POST MODIFICATO"}, "66df0ef9af434b00159d831f" ))
  //   dispatch(getOrModifyPost('DELETE', MODIFY_POST, '', "66df11f5af434b00159d831f" ))
  // }, []);

  return (
    <>
      <BrowserRouter>
        <header className='d-flex align-items-center justify-content-center'>
          <CustomNavbar />
        </header>
        <main className='d-flex justify-content-center'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
      <ProfilePage />
    </>
  );
}

export default App;



