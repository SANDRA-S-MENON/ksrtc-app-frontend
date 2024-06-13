import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
      <LogIn/>
      <SignUp/>
      <AddBus/>
    </div>
  );
}

export default App;
