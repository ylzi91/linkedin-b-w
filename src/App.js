import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, TAKE_MY_PROFILE, TAKE_ALL_PROFILE, TAKE_ID_PROFILE, modifyProfile, getExperiences, TAKE_EXP, postExperience } from './redux/actions';

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(postExperience('66dea8ff4d0def0015cef0f6', { 
      role: "Full Stack Web Developer",
      company: "FizzBuzz",
      startDate: "2022-06-16",
      endDate: "2023-06-16",
      description: "Implementing new features",
      area: "Milan",} ));
}, []);

  return (
   <>


   </>
  );
}

export default App;
