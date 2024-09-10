import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CREATE_NEW_POST, DELETE_POST, MODIFY_POST, getCategory, getCompany, getOrModifyPost, getSearch } from './redux/actions';
import CustomNavbar from './components/CustomNavbar';
import ProfilePage from './components/ProfilePage';

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
      <header className='d-flex align-items-center justify-content-center bg-dark container-fluid'>
        <CustomNavbar />
      </header>
      <ProfilePage />
    </>
  );
}

export default App;



