import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, TAKE_MY_PROFILE, TAKE_ALL_PROFILE, TAKE_ID_PROFILE } from './redux/actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile('66dea8ff4d0def0015cef0f6', TAKE_ID_PROFILE))
  }, [])

  return (
   <>


   </>
  );
}

export default App;
