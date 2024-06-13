import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
      <Route path='/add' element={<AddBus/>}/>
      
     
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
