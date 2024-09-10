import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CREATE_NEW_POST, DELETE_POST, MODIFY_POST, getCategory, getCompany, getOrModifyPost, getSearch } from './redux/actions';
import CustomNavbar from './components/CustomNavbar';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory('writing'))

  }, []);

  return (
    <>
      <header className='d-flex align-items-center justify-content-center'>
        <CustomNavbar />
      </header>
      <main>
     
      </main>
    </>
  );
}

export default App;



