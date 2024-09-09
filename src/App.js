import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CREATE_NEW_POST, DELETE_POST, MODIFY_POST, getOrModifyPost } from './redux/actions';
import CustomNavbar from './components/CustomNavbar';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrModifyPost());
    dispatch(getOrModifyPost('POST', CREATE_NEW_POST, {text: 'NUOVO POST APPENA CREATO'}))
    dispatch(getOrModifyPost('PUT', MODIFY_POST, {text: "POST MODIFICATO"}, "66df0ef9af434b00159d831f" ))
    dispatch(getOrModifyPost('DELETE', MODIFY_POST, '', "66df11f5af434b00159d831f" ))
  }, []);

  return (
    <>
      <header className='d-flex align-items-center justify-content-center'>
        <CustomNavbar />
      </header>
    </>
  );
}

export default App;



