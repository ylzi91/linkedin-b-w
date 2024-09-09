import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, TAKE_MY_PROFILE, TAKE_ALL_PROFILE, TAKE_ID_PROFILE, modifyProfile, getExperiences, TAKE_EXP, postExperience, TAKE_SPECIFIC_EXP, MODIFY_MY_EXP, modifyExperience, deleteExperience } from './redux/actions';
import CustomNavbar from './components/CustomNavbar';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getExperiences('66dea8ff4d0def0015cef0f6', TAKE_EXP))
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



